import {useState, useEffect} from "react";
import {useNavigate} from "react-router-dom";
import {motion} from "motion/react";
import {Award, Ship, Building2, ArrowRight} from "lucide-react";
import {Button} from "../ui/button";
import {
  slideSpices,
  slideGrains,
  slideFruits,
  slideDryFruits,
  categoryImages,
} from "../../assets/final_Imgs";
import { catalog } from "../../assets/data/catalog";

export function HomePage() {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [featuredCarouselIndex, setFeaturedCarouselIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(1);

  const slides = [
    {
      image: slideSpices,
      title: "Premium Indian Spices",
      subtitle: "",
      description: "Authentic flavors, certified quality, global delivery",
    },
    {
      image: slideGrains,
      title: "Finest Grains & Pulses",
      subtitle: "",
      description: "Farm-fresh produce from India's agricultural heartland",
    },
    {
      image: slideFruits,
      title: "Fresh Tropical Fruits",
      subtitle: " ",
      description: "Cold-chain delivery ensuring peak freshness",
    },
    {
      image: slideDryFruits,
      title: "Dry Fruits & Nuts",
      subtitle: "",
      description: "Handpicked quality from trusted suppliers",
    },
  ];

  // Responsive cards per view for product categories carousel
  useEffect(() => {
    const updateCardsPerView = () => {
      const width = window.innerWidth;
      if (width >= 1024) {
        setCardsPerView(3);
      } else if (width >= 640) {
        setCardsPerView(2);
      } else {
        setCardsPerView(1);
      }
    };
    updateCardsPerView();
    window.addEventListener("resize", updateCardsPerView);
    return () => window.removeEventListener("resize", updateCardsPerView);
  }, []);

  // Auto-slide functionality
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const features = [
    {
      icon: Building2,
      title: "Euro-Indo Advantage",
      description:
        "Headquartered in Paris with on-ground sourcing teams across India.",
    },
    {
      icon: Award,
      title: "Certified & Compliant Exports",
      description: "HACCP, ISO, APEDA registered. Halal & Kosher available.",
    },
    {
      icon: Ship,
      title: "Global Logistics Reach",
      description: "Strong supply lanes to Europe, Middle East & Africa.",
    },
  ];

  // Derive product categories from catalog data
  const productCategories = catalog.categories.map((cat: any) => {
    const fallbackFromSections =
      cat.sections?.[0]?.items?.[0]?.image ?? undefined;
    const fallbackFromMap = (categoryImages as any)?.[cat.id] ?? undefined;
    return {
      title: cat.title as string,
      slug: cat.id as string,
      image: (cat.heroImage as string) || fallbackFromSections || fallbackFromMap || "",
      description: (cat.overview as string) || (cat.intro as string) || "",
    };
  });

  // Build pages for the card carousel based on cardsPerView
  const categoryPages = Array.from(
    { length: Math.ceil(productCategories.length / cardsPerView) },
    (_, pageIdx) =>
      productCategories.slice(
        pageIdx * cardsPerView,
        (pageIdx + 1) * cardsPerView
      )
  );

  // Ensure current page index stays within bounds when layout changes
  useEffect(() => {
    const total = Math.ceil(productCategories.length / cardsPerView) || 1;
    if (featuredCarouselIndex >= total) {
      setFeaturedCarouselIndex(0);
    }
  }, [cardsPerView, productCategories.length, featuredCarouselIndex]);

  return (
    <div>
      {/* Hero Section with Carousel Banner */}
      <section className="relative h-[600px] md:h-[650px] overflow-hidden">
        {/* Carousel Slides */}
        <div className="absolute inset-0 w-full h-full flex transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(-${currentSlide * 100}%)`,
          }}
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              className="min-w-full h-full relative transition-opacity duration-700"
              style={{
                opacity: index === currentSlide ? 1 : 0.5,
                pointerEvents: index === currentSlide ? "auto" : "none",
              }}
            >
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
            </div>
          ))}
        </div>

        {/* Carousel Content */}
        <div className="relative h-full flex items-center z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-2xl">
              <motion.span
                key={`subtitle-${currentSlide}`}
                initial={{opacity: 0, y: 20}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 0.6}}
                className="inline-block py-1.5 text-white text-base font-medium rounded-full mb-4"
              >
                {slides[currentSlide].subtitle}
              </motion.span>
              <motion.h1
                key={`title-${currentSlide}`}
                initial={{opacity: 0, y: 20}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 0.6, delay: 0.1}}
                className="mb-4 text-4xl md:text-5xl lg:text-6xl font-bold leading-tight bg-gradient-to-r from-amber-500 via-yellow-400 to-[#1e3a5f] bg-clip-text text-transparent"
              >
                {slides[currentSlide].title}
              </motion.h1>
              <motion.p
                key={`desc-${currentSlide}`}
                initial={{opacity: 0, y: 20}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 0.6, delay: 0.2}}
                className="text-xl text-white/90 mb-8"
              >
                {slides[currentSlide].description}
              </motion.p>
              <motion.div
                key={`btns-${currentSlide}`}
                initial={{opacity: 0, y: 20}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 0.6, delay: 0.3}}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Button
                  onClick={() => navigate("/products")}
                  className="bg-[#f59e0b] hover:bg-[#d97706] text-white px-8 py-3 text-lg"
                >
                  Explore Our Catalog
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button
                  onClick={() => navigate("/contact")}
                  variant="outline"
                  className="border-2 border-white text-black hover:bg-white hover:text-[#1e3a5f] px-8 py-3 text-lg"
                >
                  Request a Quote
                </Button>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Carousel Controls - Hidden */}
        <div className="absolute bottom-8 left-0 right-0 flex justify-center z-20 hidden">
          <div className="flex gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full border-2 ${index === currentSlide
                  ? "bg-[#f59e0b] border-[#f59e0b]"
                  : "bg-white border-white/60 opacity-60"
                  } transition-all`}
                onClick={() => setCurrentSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Carousel Arrows - Hidden */}
        <button
          className="absolute left-4 top-1/2 z-20 transform -translate-y-1/2 bg-black/30 hover:bg-black/60 text-white rounded-full p-2 transition-all hidden"
          onClick={() => setCurrentSlide((currentSlide - 1 + slides.length) % slides.length)}
          aria-label="Previous slide"
        >
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth={2}><path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </button>
        <button
          className="absolute right-4 top-1/2 z-20 transform -translate-y-1/2 bg-black/30 hover:bg-black/60 text-white rounded-full p-2 transition-all hidden"
          onClick={() => setCurrentSlide((currentSlide + 1) % slides.length)}
          aria-label="Next slide"
        >
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth={2}><path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </button>

        {/* Progress Bar */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20">
          <motion.div
            key={currentSlide}
            initial={{width: "0%"}}
            animate={{width: "100%"}}
            transition={{duration: 5, ease: "linear"}}
            className="h-full bg-[#f59e0b]"
          />
        </div>
      </section>

      {/* Featured Product Categories */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-[#1e3a5f] mb-4 text-3xl font-bold">
              Our Product Range
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From farm-fresh produce to premium processed goods, we deliver
              quality across categories
            </p>
          </motion.div>

          {/* Responsive Card Carousel */}
          <div className="relative">
            {/* Controls (all screen sizes) */}
            <div className="flex justify-between items-center mb-4 hidden">
              <button
                className="p-2 rounded-full bg-white shadow hover:bg-gray-100"
                onClick={() =>
                  setFeaturedCarouselIndex((current) => {
                    const total = categoryPages.length || 1;
                    return (current - 1 + total) % total;
                  })
                }
                aria-label="Previous"
              >
                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <button
                className="p-2 rounded-full bg-white shadow hover:bg-gray-100"
                onClick={() =>
                  setFeaturedCarouselIndex((current) => {
                    const total = categoryPages.length || 1;
                    return (current + 1) % total;
                  })
                }
                aria-label="Next"
              >
                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>

            {/* Unified responsive carousel */}
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${featuredCarouselIndex * 100}%)` }}
              >
                {categoryPages.map((page, pageIndex) => (
                  <div key={pageIndex} className="min-w-full px-1 sm:px-2">
                    <div
                      className="grid gap-6"
                      style={{ gridTemplateColumns: `repeat(${cardsPerView}, minmax(0, 1fr))` }}
                    >
                      {page.map((category, index) => (
                        <motion.button
                          key={category.title}
                          onClick={() => navigate(`/products/${category.slug}`)}
                          initial={{ opacity: 0, y: 30 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.45, delay: index * 0.08 }}
                          whileHover={{
                            scale: 1.035,
                            y: -8,
                            boxShadow:
                              "0 8px 32px 0 rgba(31, 38, 135, 0.12), 0 1.5px 6px 0 #f59e0b33",
                          }}
                          className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all text-left bg-white cursor-pointer"
                        >
                          <div className="aspect-[4/3] overflow-hidden">
                            <img
                              src={category.image}
                              alt={category.title}
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                            />
                          </div>
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/25 to-transparent" />
                          <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                            <h3 className="mb-2 text-xl font-semibold drop-shadow">
                              {category.title}
                            </h3>
                            <p className="text-sm text-white/80">{category.description}</p>
                          </div>
                        </motion.button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Dots for carousel */}
            <div className="flex justify-center mt-4 gap-2">
              {categoryPages.map((_, idx) => (
                <button
                  key={idx}
                  className={`w-3 h-3 rounded-full border-2 ${idx === featuredCarouselIndex
                    ? "bg-[#f59e0b] border-[#f59e0b]"
                    : "bg-white border-white/60 opacity-70"
                    } transition-all`}
                  onClick={() => setFeaturedCarouselIndex(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center mt-12"
          >
            <Button
              onClick={() => navigate("/products")}
              className="bg-[#1e3a5f] hover:bg-[#152d47] text-white px-8"
            >
              View Complete Catalog
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{opacity: 0, y: 20}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true}}
            transition={{duration: 0.6}}
            className="text-center mb-12"
          >
            <h2 className="mb-4 text-3xl font-bold bg-gradient-to-r from-amber-500 via-yellow-400 to-[#1e3a5f] bg-clip-text text-transparent">
              Why Choose VyanaGlobal
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Your trusted partner in agricultural exports, combining European
              standards with Indian excellence
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{opacity: 0, y: 20}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true}}
                transition={{duration: 0.6, delay: index * 0.1}}
                className="bg-card p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-14 h-14 rounded-full bg-gradient-to-r from-amber-500/10 via-yellow-400/10 to-[#1e3a5f]/10 flex items-center justify-center mb-6 relative group">
                  <feature.icon 
                    className="w-7 h-7 relative z-10 text-[#f59e0b]" 
                  />
                </div>
                <h3 className="mb-3 text-xl font-semibold text-[#1e3a5f]">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="mb-3 text-2xl font-bold">
                Ready to Source Premium Products?
              </h2>
              <p className="text-white/80 text-lg">
                Connect with our team to discuss your requirements
              </p>
            </div>
            <Button
              onClick={() => navigate("/contact")}
              className="bg-[#f59e0b] hover:bg-[#d97706] text-white px-8 flex-shrink-0"
            >
              Get in Touch
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
