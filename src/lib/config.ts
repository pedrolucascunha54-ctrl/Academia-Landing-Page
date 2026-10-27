// Configurações editáveis da oferta.
// Troque CHECKOUT_URL pelo link do checkout assim que estiver pronto.
const CHECKOUT_BASE = "https://pay.cakto.com.br/g9i7njn_977018";

// Repassa as UTMs (e o fbclid) da visita para o checkout, senão a Cakto
// registra a venda sem origem.
function comOrigem(base: string) {
  try {
    const visita = new URLSearchParams(window.location.search);
    const repassar = new URLSearchParams();
    visita.forEach((v, k) => {
      if (/^(utm_|sck$|src$|fbclid$)/.test(k)) repassar.set(k, v);
    });
    const q = repassar.toString();
    return q ? `${base}?${q}` : base;
  } catch {
    return base;
  }
}

export const CHECKOUT_URL = comOrigem(CHECKOUT_BASE);

export const INSTAGRAM_URL = "https://www.instagram.com/jovem_visiionarioo/";

export const PRICE_ORIGINAL = "R$ 397,00";
export const PRICE_PROMO = "R$ 197,00";
export const PRICE_INSTALLMENTS = "12x de R$ 22,81";
