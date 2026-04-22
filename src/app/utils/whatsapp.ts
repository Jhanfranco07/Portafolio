import { contactInfo } from '../data/content';

export function getWhatsAppUrl(message = contactInfo.whatsappMessage) {
  const phone = contactInfo.whatsapp.replace(/[^0-9]/g, '');
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}

export function openWhatsApp(message?: string) {
  window.open(getWhatsAppUrl(message), '_blank', 'noopener,noreferrer');
}
