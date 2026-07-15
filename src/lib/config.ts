// Configurações editáveis da oferta.
// Troque CHECKOUT_URL pelo link do checkout assim que estiver pronto.
export const CHECKOUT_URL = "https://pay.cakto.com.br/g9i7njn_977018";

export const WHATSAPP_NUMBER = "5500000000000"; // formato: 55 + DDD + número
export const WHATSAPP_MESSAGE =
  "Olá! Vi a Academia Sites com IA e quero saber mais sobre o treinamento.";
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE
)}`;

export const PRICE_ORIGINAL = "R$ 497,00";
export const PRICE_PROMO = "R$ 195,00";
export const PRICE_INSTALLMENTS = "ou 12x de R$ 20,23";
