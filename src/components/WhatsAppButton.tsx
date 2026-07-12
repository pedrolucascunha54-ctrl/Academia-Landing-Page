import { MessageCircle } from "lucide-react";
import { WHATSAPP_URL } from "../lib/config";

export default function WhatsAppButton() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-24 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-[0_8px_24px_rgba(37,211,102,0.45)] transition-transform hover:scale-110 sm:bottom-6"
    >
      <MessageCircle className="h-7 w-7 text-white" fill="white" strokeWidth={0} />
    </a>
  );
}
