import { createFileRoute } from '@tanstack/react-router'

const CORS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
}

const UA =
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0 Safari/537.36'

type YTResult = {
  id: string
  title: string
  artist: string
  duration: number
}

function parseDuration(txt: string): number {
  if (!txt) return 0
  const parts = txt.split(':').map((n) => parseInt(n, 10) || 0)
  let s = 0
  for (const p of parts) s = s * 60 + p
  return s
}

function normalize(s: string): string {
  return (s || '')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/\s+/g, ' ')
    .trim()
}

function buildQuery(title: string, artist: string, type: string, key: string): string {
  const parts: string[] = []
  const t = normalize(title)
  const a = normalize(artist)
  if (a) parts.push(a)
  if (t) parts.push(t)
  if (type === 'playback') parts.push('playback')
  else parts.push('oficial')
  if (key) parts.push(`tom ${key}`)
  return parts.join(' ').slice(0, 120)
}

function extractResults(html: string, type: string): YTResult[] {
  const m = html.match(/var ytInitialData = ({[\s\S]*?});<\/script>/)
  if (!m) return []
  let data: any
  try {
    data = JSON.parse(m[1])
  } catch {
    return []
  }
  const sections =
    data?.contents?.twoColumnSearchResultsRenderer?.primaryContents?.sectionListRenderer
      ?.contents || []
  const out: YTResult[] = []
  for (const sec of sections) {
    const items = sec?.itemSectionRenderer?.contents || []
    for (const it of items) {
      const vr = it?.videoRenderer
      if (!vr?.videoId) continue
      const title =
        (vr.title?.runs || []).map((r: any) => r.text || '').join('') ||
        vr.title?.simpleText ||
        ''
      const artist =
        (vr.ownerText?.runs || []).map((r: any) => r.text || '').join('') ||
        (vr.longBylineText?.runs || []).map((r: any) => r.text || '').join('') ||
        ''
      const durTxt =
        vr.lengthText?.simpleText ||
        (vr.lengthText?.runs || []).map((r: any) => r.text || '').join('') ||
        ''
      const duration = parseDuration(durTxt)
      // Filter obvious mismatches by category
      const lower = (title + ' ' + artist).toLowerCase()
      if (type === 'playback' && !/playback|instrumental|karaok/i.test(lower)) continue
      if (duration && (duration < 60 || duration > 60 * 20)) continue
      out.push({ id: vr.videoId, title, artist, duration })
      if (out.length >= 12) return out
    }
  }
  return out
}

async function searchYouTube(query: string, type: string): Promise<YTResult[]> {
  const url = `https://www.youtube.com/results?search_query=${encodeURIComponent(query)}`
  const res = await fetch(url, {
    headers: {
      'User-Agent': UA,
      'Accept-Language': 'pt-BR,pt;q=0.9,en;q=0.8',
      Accept: 'text/html,application/xhtml+xml',
    },
  })
  if (!res.ok) throw new Error(`YouTube HTTP ${res.status}`)
  const html = await res.text()
  return extractResults(html, type)
}

export const Route = createFileRoute('/api/audio/search')({
  server: {
    handlers: {
      OPTIONS: async () => new Response(null, { status: 204, headers: CORS }),
      POST: async ({ request }) => {
        try {
          const body = (await request.json()) as {
            title?: string
            artist?: string
            type?: string
            key?: string
          }
          const title = (body.title || '').trim()
          const artist = (body.artist || '').trim()
          const type = body.type === 'playback' ? 'playback' : 'original'
          const key = (body.key || '').trim()

          if (!title) {
            return new Response(
              JSON.stringify({ results: [], query: '', error: 'Título ausente' }),
              { status: 400, headers: { 'Content-Type': 'application/json', ...CORS } },
            )
          }

          const query = buildQuery(title, artist, type, key)
          let results = await searchYouTube(query, type)

          // Fallback: retry without strict category filter if empty
          if (results.length === 0) {
            const fallbackQuery = buildQuery(title, artist, type, '')
            const html = await fetch(
              `https://www.youtube.com/results?search_query=${encodeURIComponent(fallbackQuery)}`,
              {
                headers: {
                  'User-Agent': UA,
                  'Accept-Language': 'pt-BR,pt;q=0.9,en;q=0.8',
                },
              },
            ).then((r) => r.text())
            results = extractResults(html, 'original') // relax filter
          }

          return new Response(JSON.stringify({ results, query }), {
            headers: { 'Content-Type': 'application/json', ...CORS },
          })
        } catch (e) {
          const msg = e instanceof Error ? e.message : 'Falha na busca'
          return new Response(JSON.stringify({ results: [], error: msg }), {
            status: 502,
            headers: { 'Content-Type': 'application/json', ...CORS },
          })
        }
      },
    },
  },
})
