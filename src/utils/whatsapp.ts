export const WHATSAPP_PHONE = '919716786164';
export const DISPLAY_PHONE = '+91 97167 86164';
export const DISPLAY_EMAIL = 'info@eliteinteriordecore.com';

export function getServiceWhatsAppUrl(serviceName?: string, location?: string, clientName?: string): string {
  let message = 'Hello Elite Interior and Decore, I would like to get a quote for your interior design services.';
  
  if (serviceName) {
    message = `Hello Elite Interior and Decore, I am interested in ${serviceName}. I would like to discuss my requirement and get a quotation.`;
  }

  if (clientName || location) {
    const details: string[] = [];
    if (clientName) details.push(`My name is ${clientName}`);
    if (location) details.push(`Project Location: ${location}`);
    if (details.length > 0) {
      message += ` (${details.join(', ')})`;
    }
  }

  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;
}

export function getProjectWhatsAppUrl(projectTitle: string, location: string): string {
  const message = `Hello Elite Interior and Decore, I saw your project "${projectTitle}" (${location}) on your website. I would like to discuss a similar interior requirement for my space.`;
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;
}
