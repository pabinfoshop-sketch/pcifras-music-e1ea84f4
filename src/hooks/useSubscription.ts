import { useEffect, useState } from 'react'
import { supabase } from '@/integrations/supabase/client'

export interface SubscriptionState {
  isPremium: boolean
  isLoading: boolean
  status: string | null
  expiresAt: string | null
}

/**
 * Hook para consultar o status de assinatura do usuário logado.
 * Considera `subscription_status === 'premium'` (respeitando `subscription_expires_at`)
 * como assinante ativo.
 */
export function useSubscription(): SubscriptionState {
  const [state, setState] = useState<SubscriptionState>({
    isPremium: false,
    isLoading: true,
    status: null,
    expiresAt: null,
  })

  useEffect(() => {
    let cancelled = false

    async function load(userId: string | undefined) {
      if (!userId) {
        if (!cancelled) setState({ isPremium: false, isLoading: false, status: null, expiresAt: null })
        return
      }
      const { data } = await supabase
        .from('profiles')
        .select('subscription_status, subscription_expires_at, premium, premium_until')
        .eq('id', userId)
        .maybeSingle()

      if (cancelled) return

      const status = (data?.subscription_status as string | null) ?? null
      const expiresAt = (data?.subscription_expires_at as string | null) ?? null
      const now = Date.now()
      const notExpired = !expiresAt || new Date(expiresAt).getTime() > now
      const bySubscription = status === 'premium' && notExpired
      const legacy = !!data?.premium && (!data?.premium_until || new Date(data.premium_until as string).getTime() > now)

      setState({
        isPremium: bySubscription || legacy,
        isLoading: false,
        status,
        expiresAt,
      })
    }

    supabase.auth.getUser().then(({ data }) => load(data.user?.id))

    const { data: sub } = supabase.auth.onAuthStateChange((_event, session) => {
      setState((s) => ({ ...s, isLoading: true }))
      load(session?.user?.id)
    })

    return () => {
      cancelled = true
      sub.subscription.unsubscribe()
    }
  }, [])

  return state
}

export default useSubscription
