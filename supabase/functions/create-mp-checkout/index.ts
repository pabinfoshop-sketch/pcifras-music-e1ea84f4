// Edge Function: create-mp-checkout
// Cria uma preferência de checkout do Mercado Pago para o plano Premium.

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const accessToken = Deno.env.get("MERCADO_PAGO_ACCESS_TOKEN");
    if (!accessToken) {
      return new Response(
        JSON.stringify({ error: "MERCADO_PAGO_ACCESS_TOKEN não configurado" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } },
      );
    }

    const body = await req.json().catch(() => ({}));
    const userId: string | undefined = body?.user_id;
    const origin =
      body?.origin ||
      req.headers.get("origin") ||
      "https://pcifras-music.lovable.app";

    if (!userId) {
      return new Response(JSON.stringify({ error: "user_id é obrigatório" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const preference = {
      items: [
        {
          id: "premium-monthly",
          title: "pCifras Premium — Mensal",
          description: "Assinatura mensal do plano Premium",
          quantity: 1,
          currency_id: "BRL",
          unit_price: 19.9,
        },
      ],
      payer: { },
      external_reference: userId,
      metadata: { user_id: userId, plan: "premium_monthly" },
      back_urls: {
        success: `${origin}/planos?status=sucesso`,
        failure: `${origin}/planos?status=falha`,
        pending: `${origin}/planos?status=pendente`,
      },
      auto_return: "approved",
      statement_descriptor: "PCIFRAS",
    };

    const mpRes = await fetch(
      "https://api.mercadopago.com/checkout/preferences",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(preference),
      },
    );

    const data = await mpRes.json();

    if (!mpRes.ok) {
      console.error("Mercado Pago error:", data);
      return new Response(
        JSON.stringify({ error: "Falha ao criar preferência", details: data }),
        { status: 502, headers: { ...corsHeaders, "Content-Type": "application/json" } },
      );
    }

    return new Response(
      JSON.stringify({
        init_point: data.init_point,
        sandbox_init_point: data.sandbox_init_point,
        preference_id: data.id,
      }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" } },
    );
  } catch (err) {
    console.error("create-mp-checkout error:", err);
    return new Response(
      JSON.stringify({ error: (err as Error).message }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } },
    );
  }
});
