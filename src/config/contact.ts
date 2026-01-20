export type ContactConfig = {
  phone: any;
  name: string;
  title: string;
  email: string;
  phoneDisplay: string; // Human-readable, e.g., "+91 97848 52028"
  phoneE164: string; // E.164 without '+' for wa.me, e.g., "919784852028"
  location: string;
  website: string;
};

export const CONTACT: ContactConfig = {
    name: "Mohit Detwani",
    title: "Co-Founder & Director – International Business",
    email: "contact@vyanaglobal.com",
    phoneDisplay: "+33 7 45 65 00 97",
    phoneE164: "33745650097",
    location: "Paris, France",
    website: "www.vyanaglobal.com",
    phone: undefined
};

export const CONTACT_INDIA: ContactConfig = {
  name: "Manish Detwani",
  title: "Co-Founder & Director – Sourcing & Operations",
  email: "contact@vyanaglobal.com",
  phoneDisplay: "+91 97848 52028",
  phoneE164: "919784852028",
  location: "Rajasthan, India",
  website: "www.vyanaglobal.com",
  phone: undefined
};

export function getMailtoHref(subject?: string, body?: string): string {
  const params = new URLSearchParams();
  if (subject) params.set("subject", subject);
  if (body) params.set("body", body);
  const query = params.toString();
  return `mailto:${CONTACT.email}${query ? `?${query}` : ""}`;
}

export function getTelHref(): string {
  return `tel:+${CONTACT.phoneE164}`;
}

export function getWhatsAppUrl(message?: string): string {
  const defaultMessage = "Hello! I am interested in your products.";
  const text = encodeURIComponent(message || defaultMessage);
  return `https://wa.me/${CONTACT.phoneE164}?text=${text}`;
}