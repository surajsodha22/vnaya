import {Link} from "react-router-dom";
import {Logo} from "../common/Logo";
import {Phone, Mail, MapPin, MessageCircle} from "lucide-react";
import {CONTACT, CONTACT_INDIA, getWhatsAppUrl, getMailtoHref} from "../../config/contact";

// LinkedIn Icon Component (matching Header style)
const LinkedInIcon = (props: React.ComponentProps<'svg'>) => (
  <svg
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    {...props}
    aria-label="LinkedIn"
    role="img"
    width={24}
    height={24}
    focusable="false"
  >
    <title>LinkedIn</title>
    <path
      fill="currentColor"
      d="M19 0H5C2.2 0 0 2.2 0 5V19C0 21.8 2.2 24 5 24H19C21.8 24 24 21.8 24 19V5C24 2.2 21.8 0 19 0ZM7.12 20.48H3.56V9.25H7.12V20.48ZM5.34 7.77C4.08 7.77 3.07 6.76 3.07 5.5C3.07 4.24 4.08 3.23 5.34 3.23C6.59 3.23 7.61 4.24 7.61 5.5C7.6 6.76 6.59 7.77 5.34 7.77ZM20.48 20.48H16.92V15.08C16.92 13.76 16.9 12.06 15.08 12.06C13.23 12.06 12.98 13.47 12.98 15V20.48H9.42V9.25H12.81V10.69H12.86C13.33 9.84 14.37 8.95 15.86 8.95C19.13 8.95 20.48 10.91 20.48 14.09V20.48Z"
    />
  </svg>
);

// Instagram Icon Component (matching Header style)
const InstagramIcon = (props: React.ComponentProps<'svg'>) => (
  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
    <rect width="18" height="18" x="3" y="3" rx="5" fill="none" stroke="currentColor" strokeWidth="2"/>
    <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2"/>
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor"/>
  </svg>
);

export function Footer() {
  return (
    <footer className="bg-[#1e3a5f] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* About Section */}
          <div className="lg:col-span-1">
            <Logo variant="onDark" imgClassName="h-14 md:h-16 lg:h-20 mb-6" />
            <div className="space-y-4 text-sm text-gray-300 leading-relaxed">
              <p>
                Bridging Indian Agriculture with Global Markets. Managed in Paris,
                sourced at origin, delivered worldwide.
              </p>
              <p>
                VyanaGlobal is your trusted partner in agricultural exports, combining
                European standards with Indian excellence.
              </p>
             
            </div>
          </div>

          {/* Quick Links */}
          <div>
            
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="font-semibold text-lg mb-6 bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-400 bg-clip-text text-transparent">
              Contact
            </h3>
            <div className="space-y-4 text-sm">
              {/* Paris Office */}
              <div className="space-y-2">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 mt-1 flex-shrink-0 text-amber-500" />
                  <div>
                    <p className="font-semibold text-white mb-1">{CONTACT.location}</p>
                    <a
                      href={`tel:${CONTACT.phoneE164}`}
                      className="text-gray-300 hover:text-[#f59e0b] transition-colors flex items-center gap-1.5"
                    >
                      <Phone className="w-3.5 h-3.5" />
                      {CONTACT.phoneDisplay}
                    </a>
                  </div>
                </div>
              </div>

              {/* India Office */}
              <div className="space-y-2">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 mt-1 flex-shrink-0 text-amber-500" />
                  <div>
                    <p className="font-semibold text-white mb-1">{CONTACT_INDIA.location}</p>
                    <a
                      href={`tel:${CONTACT_INDIA.phoneE164}`}
                      className="text-gray-300 hover:text-[#f59e0b] transition-colors flex items-center gap-1.5"
                    >
                      <Phone className="w-3.5 h-3.5" />
                      {CONTACT_INDIA.phoneDisplay}
                    </a>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-3 pt-2">
                <Mail className="w-4 h-4 mt-1 flex-shrink-0 text-amber-500" />
                <a
                  href={getMailtoHref()}
                  className="text-gray-300 hover:text-[#f59e0b] transition-colors break-all"
                >
                  {CONTACT.email}
                </a>
              </div>

              {/* Social Media */}
              <div className="pt-4">
                <p className="text-white font-medium mb-3 text-xs uppercase tracking-wide">Follow Us</p>
                <div className="flex gap-3">
                  <a
                    href="https://linkedin.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#f59e0b] flex items-center justify-center transition-all duration-300 hover:scale-110 group border border-amber-500/30"
                  >
                    <LinkedInIcon className="w-5 h-5 text-amber-500 group-hover:text-white transition-colors" />
                  </a>
                  <a
                    href="https://instagram.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#f59e0b] flex items-center justify-center transition-all duration-300 hover:scale-110 group border border-amber-500/30"
                  >
                    <InstagramIcon className="w-5 h-5 text-amber-500 group-hover:text-white transition-colors" />
                  </a>
                  <a
                    href={getWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="WhatsApp"
                    className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#f59e0b] flex items-center justify-center transition-all duration-300 hover:scale-110 group border border-amber-500/30"
                  >
                    <MessageCircle className="w-5 h-5 text-amber-500 group-hover:text-white transition-colors" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Company Info */}
          <div>
            <h3 className="font-semibold text-lg mb-6 bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-400 bg-clip-text text-transparent">
              Company
            </h3>
            <div className="space-y-3 text-sm text-gray-300">
              <p className="leading-relaxed">
                Your trusted partner in agricultural exports, combining European
                standards with Indian excellence.
              </p>
              <div className="pt-2 space-y-2">
                <p className="text-white font-medium">Certifications:</p>
                <ul className="space-y-1 text-xs">
                  <li>• HACCP Certified</li>
                  <li>• ISO Compliant</li>
                  <li>• APEDA Registered</li>
                  <li>• Halal & Kosher Available</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p>
              © {new Date().getFullYear()} VyanaGlobal. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
              <a
                href="#"
                className="hover:text-[#f59e0b] transition-colors"
              >
                Privacy Policy
              </a>
              <span className="text-white/20">|</span>
              <a
                href="#"
                className="hover:text-[#f59e0b] transition-colors"
              >
                Terms of Service
              </a>
              <span className="text-white/20">|</span>
              <a
                href="/sourcing"
                className="hover:text-[#f59e0b] transition-colors"
              >
                Quality & Compliance
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
