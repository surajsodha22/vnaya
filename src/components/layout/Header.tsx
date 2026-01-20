import {useMemo, useState, useEffect} from "react";
import {Link, useLocation, useNavigate} from "react-router-dom";
import {Logo} from "../common/Logo";
import {ChevronDown, Menu, X, Mail, Phone, MapPin} from "lucide-react";
import {motion, AnimatePresence} from "motion/react";
import {
  CONTACT,
  CONTACT_INDIA,
  getMailtoHref,
  getTelHref,
} from "../../config/contact";
// TODO: Add a declaration file for '../../assets/data/catalog' to prevent implicit 'any' type for catalog import.
import catalog from "../../assets/data/catalog";

// Social Icon SVGs (simple inline)
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

const InstagramIcon = (props: React.ComponentProps<'svg'>) => (
  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}><rect width="18" height="18" x="3" y="3" rx="5" fill="none" stroke="currentColor" strokeWidth="2"/><circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/></svg>
);

export function Header() {
  const [productsOpen, setProductsOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [carouselIndex, setCarouselIndex] = useState(0);
  const location = useLocation();
  const navigate = useNavigate();

  // Carousel items: location and email
  const carouselItems = useMemo(() => [
    {
      icon: MapPin,
      text: `${CONTACT.location} | ${CONTACT_INDIA.location}`,
      href: null,
      onClick: () => navigate("/contact"),
    },
    {
      icon: Mail,
      text: CONTACT.email,
      href: null,
      onClick: () => navigate("/contact"),
    },
  ], [navigate]);

  // Auto-rotate carousel every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCarouselIndex((prev) => (prev + 1) % carouselItems.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [carouselItems.length]);

  const menuItems = [
    {label: "Home", path: "/"},
    {label: "About Us", path: "/about"},
    {label: "Products", path: "/products", hasDropdown: true},
    {label: "Contact Us", path: "/contact"},
  ];

  const productCategories = useMemo(() => {
    const cats = ((catalog as any).categories as Array<any>) || [];
    return [
      {label: "All Categories", path: "/products"},
      ...cats.map((c: any) => ({
        label: c.title as string,
        path: `/products/${c.id as string}`,
      })),
    ];
  }, []);

  const isProductsActive = location.pathname.startsWith("/products");

  const isActive = (path: string) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };

  return (
    <header className="bg-white shadow-sm">
      {/* Top Bar */}
      <div className="bg-[#1e3a5f] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-row items-center justify-end py-2 text-xs sm:text-sm overflow-hidden">
            {/* Right - Carousel (Location/Email), Contact Info and Social */}
            <div className="flex items-center gap-2 sm:gap-3 md:gap-4 justify-end flex-nowrap min-w-0">
              {/* Carousel for Location and Email */}
              <div className="relative h-5 w-[120px] sm:w-[160px] md:w-[200px] overflow-hidden ml-2 sm:ml-4 flex-shrink-0">
                <AnimatePresence mode="wait">
                  {carouselItems.map((item, index) => {
                    if (index !== carouselIndex) return null;
                    const Icon = item.icon;
                    return (
                      <motion.button
                        key={index}
                        initial={{opacity: 0, y: 10}}
                        animate={{opacity: 1, y: 0}}
                        exit={{opacity: 0, y: -10}}
                        transition={{duration: 0.3}}
                        onClick={item.onClick}
                        className="flex items-center gap-1.5 text-white/90 absolute inset-0 hover:text-[#f59e0b] transition-colors cursor-pointer text-left"
                        title={item.text}
                      >
                        <Icon className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 flex-shrink-0 text-amber-500" />
                        <span className="text-[10px] sm:text-xs md:text-sm truncate">
                          {item.text}
                        </span>
                      </motion.button>
                    );
                  })}
                </AnimatePresence>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2 hover:text-[#f59e0b] transition-colors text-[10px] sm:text-xs md:text-sm flex-shrink-0">
                <Phone className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 text-amber-500 flex-shrink-0" />
                <a
                  href={`tel:${CONTACT.phoneE164}`}
                  className="hover:underline whitespace-nowrap flex-shrink-0"
                >
                  {CONTACT.phoneDisplay}
                </a>
                <span className="hidden sm:inline flex-shrink-0">|</span>
                <a
                  href={`tel:${CONTACT_INDIA.phoneE164}`}
                  className="hover:underline whitespace-nowrap flex-shrink-0"
                >
                  {CONTACT_INDIA.phoneDisplay}
                </a>
              </div>
              {/* Social Icons */}
              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="ml-2 hover:text-amber-400 transition-colors flex-shrink-0"
              >
                <LinkedInIcon className="w-4 h-4 sm:w-4.5 sm:h-4.5 md:w-5 md:h-5 text-amber-500" />
              </a>
              <a
                href="https://instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="hover:text-amber-400 transition-colors flex-shrink-0"
              >
                <InstagramIcon className="w-4 h-4 sm:w-4.5 sm:h-4.5 md:w-5 md:h-5 text-amber-500" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="focus:outline-none">
              <Logo imgClassName="h-12 md:h-14 lg:h-16" />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8 z-9999">
              {menuItems.map((item) => (
                <div key={item.path} className="relative">
                  {item.hasDropdown ? (
                    <div
                      onMouseEnter={() => setProductsOpen(true)}
                      onMouseLeave={() => setProductsOpen(false)}
                      className=""
                    >
                      <Link
                        to={item.path}
                        className={`flex items-center gap-1 py-2 transition-all duration-300 ${
                          isProductsActive
                            ? "bg-gradient-to-r from-amber-600 via-yellow-500 to-amber-600 bg-clip-text text-transparent font-medium"
                            : "text-gray-700 hover:bg-gradient-to-r hover:from-amber-600 hover:via-yellow-500 hover:to-amber-600 hover:bg-clip-text hover:text-transparent"
                        }`}
                      >
                        {item.label}
                        <ChevronDown
                          className={`w-4 h-4 transition-transform ${
                            productsOpen ? "rotate-180" : ""
                          }`}
                        />
                      </Link>

                      <AnimatePresence>
                        {productsOpen && (
                          <motion.div
                            initial={{opacity: 0, y: -10}}
                            animate={{opacity: 1, y: 0}}
                            exit={{opacity: 0, y: -10}}
                            transition={{duration: 0.2}}
                            className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-100 py-2"
                          >
                            {productCategories.map((category, index) => (
                              <Link
                                key={category.path}
                                to={category.path}
                                onClick={() => setProductsOpen(false)}
                                className={`block w-full text-left px-4 py-2 text-sm transition-colors ${
                                  index === 0
                                    ? "text-[#1e3a5f] font-medium hover:bg-[#1e3a5f]/10"
                                    : "text-gray-700 hover:bg-gray-50 hover:text-[#1e3a5f]"
                                }`}
                              >
                                {category.label}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      to={item.path}
                      className={`py-2 transition-all duration-300 ${
                        isActive(item.path)
                          ? "bg-gradient-to-r from-amber-600 via-yellow-500 to-amber-600 bg-clip-text text-transparent font-medium"
                          : "text-gray-700 hover:bg-gradient-to-r hover:from-amber-600 hover:via-yellow-500 hover:to-amber-600 hover:bg-clip-text hover:text-transparent"
                      }`}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-gray-700 hover:text-[#1e3a5f]"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.nav
                initial={{height: 0, opacity: 0}}
                animate={{height: "auto", opacity: 1}}
                exit={{height: 0, opacity: 0}}
                transition={{duration: 0.3}}
                className="lg:hidden overflow-hidden"
              >
                <div className="py-4 space-y-2">
                  {menuItems.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`block w-full text-left px-4 py-3 rounded-md transition-all duration-300 ${
                        isActive(item.path)
                          ? "bg-gradient-to-r from-amber-600 via-yellow-500 to-amber-600 bg-clip-text text-transparent font-medium bg-gray-50"
                          : "text-gray-700 hover:bg-gradient-to-r hover:from-amber-600 hover:via-yellow-500 hover:to-amber-600 hover:bg-clip-text hover:text-transparent"
                      }`}
                    >
                      {item.label}
                    </Link>
                  ))}
                  {/* Social Icons in mobile menu */}
                  <div className="flex gap-4 px-4 mt-3">
                    <a
                      href="https://linkedin.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="LinkedIn"
                      className="hover:text-amber-400 transition-colors"
                    >
                      <LinkedInIcon className="w-4 h-4 sm:w-4.5 sm:h-4.5 md:w-5 md:h-5 text-amber-500" />
                    </a>
                    <a
                      href="https://instagram.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Instagram"
                      className="hover:text-amber-400 transition-colors"
                    >
                      <InstagramIcon className="w-4 h-4 sm:w-4.5 sm:h-4.5 md:w-5 md:h-5 text-amber-500" />
                    </a>
                  </div>
                </div>
              </motion.nav>
            )}
          </AnimatePresence>
        </div>
      </div>
    </header>
  );
}
