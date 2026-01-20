import {useMemo, useRef, useState} from "react";
import {useParams, useNavigate, Link} from "react-router-dom";
import {motion} from "motion/react";
import {ChevronRight, ChevronLeft, ArrowLeft} from "lucide-react";
import {Button} from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import {ImageWithFallback} from "../common/ImageWithFallback";
import catalog from "../../assets/data/catalog";
import {categoryImages} from "../../assets/final_Imgs";
import {getWhatsAppUrl} from "../../config/contact";

export function ProductsPage() {
  const {category} = useParams<{category: string}>();
  const navigate = useNavigate();
  const [selectedProduct, setSelectedProduct] = useState<any | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  // Keep a ref per section for horizontal scroll controls
  const sliderRefs = useRef<(HTMLDivElement | null)[]>([]);
  const scrollSectionByCard = (sectionIndex: number, direction: -1 | 1) => {
    const container = sliderRefs.current[sectionIndex];
    if (!container) return;
    // Find any card to measure width (includes gap approximation)
    const sampleCard = container.querySelector<HTMLElement>("[data-card]");
    const cardWidth = sampleCard?.offsetWidth ?? Math.floor(container.clientWidth * 0.9);
    const gap = 16; // Tailwind gap-4
    container.scrollBy({left: direction * (cardWidth + gap), behavior: "smooth"});
  };

  const handleCardClick = (item: any) => {
    setSelectedProduct(item);
    setIsDialogOpen(true);
  };

  const categories = useMemo(() => {
    return ((catalog as any).categories as Array<any>).map((c) => ({
      id: c.id as string,
      label: c.title as string,
    }));
  }, []);

  const selectedCategory = category || (categories[0]?.id ?? "spices");
  const currentCategory = useMemo(() => {
    const list = (catalog as any).categories as Array<any>;
    return list.find((c) => c.id === selectedCategory) ?? list[0];
  }, [selectedCategory]);
  const headerImage =
    currentCategory?.heroImage || (categoryImages as any)[currentCategory?.id];

  const bulletGroups = (
    item: any
  ): Array<{label?: string; values: string[]}> => {
    const groups: Array<{label?: string; values: string[]}> = [];
    const pushArr = (label: string | undefined, arr?: string[]) => {
      if (arr && arr.length) groups.push({label, values: arr});
    };
    const pushObj = (label: string | undefined, obj?: Record<string, any>) => {
      if (!obj) return;
      const entries: string[] = [];
      Object.keys(obj).forEach((k) => {
        const v = obj[k];
        if (Array.isArray(v)) {
          entries.push(`${k}: ${v.join(" | ")}`);
        } else if (typeof v === "object" && v !== null) {
          entries.push(`${k}`);
        } else {
          entries.push(`${k}: ${v}`);
        }
      });
      if (entries.length) groups.push({label, values: entries});
    };
    pushArr("Varieties", item.varieties);
    pushArr("Grades", item.grades);
    pushArr("Variants", item.variants);
    pushArr("Range", item.range);
    pushArr("Product Range", item.productRange);
    pushArr("Popular", item.popular);
    pushArr("Popular Mixes", item.popularMixes);
    pushArr("Products", item.products);
    pushArr("Formats", item.formats);
    pushArr("Other Varieties", item.otherVarieties);
    pushArr("Sizes", item.sizes);
    pushArr("Applications", item.applications);
    pushArr("Options", item.options);
    pushArr("Features", item.features);
    // pushObj("Specs", item.specs);
    return groups;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Page Header */}
        <motion.div
          initial={{opacity: 0, y: 20}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.6}}
          className="mb-12"
        >
          <Link
            to="/products"
            className="flex items-center gap-2 text-[#1e3a5f] hover:text-[#f59e0b] transition-colors mb-4 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm font-medium">Back to All Categories</span>
          </Link>
          <h1 className="text-[#1e3a5f] mb-4 text-3xl font-bold">
            Product Catalog
          </h1>
          <p className="text-gray-600 text-lg max-w-3xl">
            Browse our comprehensive range of products, sourced from India's
            finest regions and processed to international standards.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-24">
              <h3 className="text-[#1e3a5f] mb-4 font-semibold">Categories</h3>
              <nav className="space-y-1">
                {categories.map((cat) => (
                  <Link
                    key={cat.id}
                    to={`/products/${cat.id}`}
                    className={`w-full text-left px-4 py-3 rounded-md transition-colors flex items-center justify-between group ${
                      selectedCategory === cat.id
                        ? "bg-[#1e3a5f] text-white"
                        : "text-gray-700 hover:bg-gray-50"
                    }`}
                  >
                    <span className="text-sm">{cat.label}</span>
                    <ChevronRight
                      className={`w-4 h-4 transition-transform ${
                        selectedCategory === cat.id
                          ? "text-white"
                          : "text-gray-400"
                      }`}
                    />
                  </Link>
                ))}
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <motion.div
              key={selectedCategory}
              initial={{opacity: 0, x: 20}}
              animate={{opacity: 1, x: 0}}
              transition={{duration: 0.4}}
            >
              {/* Category Header */}
              <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-8">
                <div className="h-64 overflow-hidden relative">
                  <img
                    src={headerImage}
                    alt={currentCategory.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h2 className="text-2xl font-bold mb-2">
                      {currentCategory.title}
                    </h2>
                    <p className="text-white/90 text-sm">
                      {currentCategory.overview}
                    </p>
                  </div>
                </div>
              </div>

              {/* Product Sections with Cards */}
              <div className="space-y-8">
                {(currentCategory.sections || []).map(
                  (section: any, idx: number) => (
                    <motion.div
                      key={idx}
                      initial={{opacity: 0, y: 20}}
                      animate={{opacity: 1, y: 0}}
                      transition={{duration: 0.4, delay: idx * 0.1}}
                    >
                      <h3 className="text-[#1e3a5f] font-semibold text-lg mb-4 flex items-center gap-2">
                        <span className="w-1 h-6 bg-[#f59e0b] rounded-full"></span>
                        {section.subtitle}
                      </h3>
                      <div className="relative">
                        {/* Left control */}
                        <button
                          type="button"
                          aria-label="Previous"
                          onClick={() => scrollSectionByCard(idx, -1)}
                          className="hidden"
                        >
                          <ChevronLeft className="h-5 w-5" />
                        </button>

                        {/* Right control */}
                        <button
                          type="button"
                          aria-label="Next"
                          onClick={() => scrollSectionByCard(idx, 1)}
                          className="hidden sm:flex items-center justify-center absolute right-0 top-1/2 -translate-y-1/2 z-10 h-10 w-10 rounded-full bg-white/30 shadow-md border border-gray-200 text-gray-700 hover:bg-gray-50"
                        >
                          <ChevronRight className="h-5 w-5" />
                        </button>

                        {/* Horizontal slider */}
                        <div
                          ref={(el) => (sliderRefs.current[idx] = el)}
                          className="flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth scrollbar-hide px-1"
                        >
                          {(section.items || []).map(
                            (item: any, productIdx: number) => (
                              <motion.div
                                key={productIdx}
                                data-card
                                initial={{opacity: 0, scale: 0.95}}
                                animate={{opacity: 1, scale: 1}}
                                transition={{
                                  duration: 0.3,
                                  delay: productIdx * 0.05,
                                }}
                                whileHover={{
                                  y: -4,
                                  boxShadow: "0 10px 40px rgba(0,0,0,0.12)",
                                }}
                                className="snap-start w-96 flex-shrink-0 bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 group cursor-pointer flex flex-col"
                                onClick={() => handleCardClick(item)}
                              >
                                {/* Image (optional with fallback to category hero) */}
                                <div className="h-40 overflow-hidden relative bg-gray-50">
                                  <ImageWithFallback
                                    src={item.image || headerImage}
                                    alt={item.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    loading="lazy"
                                    decoding="async"
                                  />
                                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                </div>

                                <div className="p-4 flex flex-col text-center">
                                  <h4 className="font-semibold text-[#1e3a5f] mb-1 group-hover:text-[#f59e0b] transition-colors">
                                    {item.title}
                                  </h4>
                                  <p className="text-gray-500 text-sm line-clamp-3">
                                    {item.description}
                                  </p>
                                </div>
                              </motion.div>
                            )
                          )}
                        </div>
                      </div>
                    </motion.div>
                  )
                )}
              </div>

              {/* CTAs */}
              {/* <motion.div
                initial={{opacity: 0, y: 20}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 0.4, delay: 0.2}}
                className="mt-8 bg-white rounded-lg shadow-sm p-6"
              >
                <h4 className="text-sm font-semibold text-gray-700 mb-3">
                  Get in touch
                </h4>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    onClick={() => navigate("/contact")}
                    className="bg-[#f59e0b] hover:bg-[#d97706] text-white"
                  >
                    Request Quote
                  </Button>
                  <Button
                    onClick={() => navigate("/contact")}
                    variant="outline"
                    className="border-2 border-[#1e3a5f] text-[#1e3a5f] hover:bg-[#1e3a5f] hover:text-white"
                  >
                    Request Product Catalog
                  </Button>
                  <Button
                    onClick={() =>
                      window.open(
                        getWhatsAppUrl(
                          "Hello Vyana Global, I'd like to inquire about your products."
                        ),
                        "_blank"
                      )
                    }
                    variant="outline"
                    className="border-2 border-[#22c55e] text-[#16a34a] hover:bg-[#22c55e] hover:text-white"
                  >
                    WhatsApp for Inquiry
                  </Button>
                </div>
              </motion.div> */}

              {/* Additional Info */}
              <motion.div
                initial={{opacity: 0, y: 20}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 0.6, delay: 0.4}}
                className="mt-6 bg-gradient-to-r from-[#f59e0b]/10 to-[#f59e0b]/5 border border-[#f59e0b]/20 rounded-lg p-6"
              >
                <h4 className="font-semibold text-[#1e3a5f] mb-2">
                  Custom Requirements?
                </h4>
                <p className="text-gray-700 text-sm mb-4">
                  We offer private labeling, custom packaging, and bulk orders
                  tailored to your specifications.
                </p>
                <Button
                  onClick={() => navigate("/contact")}
                  className="bg-[#f59e0b] hover:bg-[#d97706] text-white"
                >
                  Discuss Custom Solutions
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Product Detail Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto scrollbar-hide">
          {selectedProduct && (
            <>
              <DialogHeader className="text-center">
                <DialogTitle className="text-2xl text-[#1e3a5f] text-center">
                  {selectedProduct.title}
                </DialogTitle>
                <DialogDescription className="text-base text-center">
                  {selectedProduct.description}
                </DialogDescription>
              </DialogHeader>
              
              <div className="mt-4 space-y-6">
                {/* Product Image */}
                <div className="w-full h-64 md:h-80 rounded-lg overflow-hidden bg-gray-50">
                  <ImageWithFallback
                    src={selectedProduct.image || headerImage}
                    alt={selectedProduct.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Full Product Details */}
                <div className="space-y-4">
                  {bulletGroups(selectedProduct).map((group, i) => (
                    <div key={i} className="bg-gray-50 rounded-lg p-4 text-center">
                      {group.label && (
                        <h4 className="text-[#1e3a5f] font-semibold mb-2 text-lg">
                          {group.label}
                        </h4>
                      )}
                      <ul className="list-none space-y-1 flex flex-col items-center">
                        {group.values.map((v, j) => (
                          <li key={j} className="text-gray-700 leading-relaxed text-center">
                            {v}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t">
                  <Button
                    onClick={() => navigate("/contact")}
                    className="bg-[#f59e0b] hover:bg-[#d97706] text-white flex-1"
                  >
                    Request Quote
                  </Button>
                  <Button
                    onClick={() =>
                      window.open(
                        getWhatsAppUrl(
                          `Hello Vyana Global, I'd like to inquire about ${selectedProduct.title}.`
                        ),
                        "_blank"
                      )
                    }
                    variant="outline"
                    className="border-2 border-[#22c55e] text-[#16a34a] hover:bg-[#22c55e] hover:text-white flex-1"
                  >
                    WhatsApp Inquiry
                  </Button>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
