import {useMemo} from "react";
import {useNavigate} from "react-router-dom";
import {motion} from "motion/react";
import {ArrowRight} from "lucide-react";
import {catalog} from "../../assets/data/catalog.js";
import {categoryImages} from "../../assets/final_Imgs";

export function ProductCategoriesPage() {
  const navigate = useNavigate();
  const categories = useMemo(() => {
    const list = (catalog as any).categories as Array<any>;
    return list.map((c) => {
      const itemsCount = (c.sections || []).reduce(
        (sum: number, s: any) => sum + ((s.items && s.items.length) || 0),
        0,
      );
      return {
        id: c.id,
        title: c.title,
        image: c.heroImage || (categoryImages as any)[c.id],
        description: c.overview,
        products: `${itemsCount}+ Items`,
      };
    });
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[350px] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1542838132-92c53300491e?w=1600"
          alt="Product Categories"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1e3a5f]/90 to-[#1e3a5f]/70" />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <motion.div
              initial={{opacity: 0, y: 30}}
              animate={{opacity: 1, y: 0}}
              transition={{duration: 0.8}}
              className="max-w-2xl"
            >
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Our Product Categories
              </h1>
              <p className="text-xl text-white/90">
                Explore our comprehensive range of premium agricultural
                products, sourced from India's finest regions and exported with
                European quality standards.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{opacity: 0, y: 20}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.6}}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-[#1e3a5f] mb-4">
              Browse by Category
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Click on any category to explore our full range of products with
              detailed specifications
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{opacity: 0, y: 30}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 0.5, delay: index * 0.1}}
                whileHover={{y: -8}}
                onClick={() => navigate(`/products/${category.id}`)}
                className="group cursor-pointer"
              >
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-full">
                  {/* Image */}
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={category.image}
                      alt={category.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                    {/* Product Count Badge */}
                    <div className="absolute top-4 right-4 bg-[#f59e0b] text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {category.products}
                    </div>

                    {/* Title on Image */}
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-2xl font-bold text-white group-hover:text-[#f59e0b] transition-colors">
                        {category.title}
                      </h3>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <p className="text-gray-600 mb-4 line-clamp-2">
                      {category.description}
                    </p>

                    <div className="flex items-center text-[#1e3a5f] font-semibold group-hover:text-[#f59e0b] transition-colors">
                      <span>Explore Products</span>
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#1e3a5f] to-[#24446c] text-white relative overflow-hidden mb-16">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%221%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')]"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{opacity: 0, y: 20}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true}}
            transition={{duration: 0.6}}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Can't Find What You're Looking For?
            </h2>
            <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
              We source a wide variety of products. Contact us with your
              specific requirements.
            </p>
            <motion.button
              whileHover={{scale: 1.05}}
              whileTap={{scale: 0.95}}
              onClick={() => navigate("/contact")}
              className="bg-[#f59e0b] hover:bg-[#d97706] text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Contact Us for Custom Requirements
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="pb-12 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              {number: "8", label: "Product Categories"},
              {number: "100+", label: "Products"},
              {number: "20+", label: "Countries Served"},
              {number: "500+", label: "Verified Suppliers"},
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{opacity: 0, scale: 0.9}}
                whileInView={{opacity: 1, scale: 1}}
                viewport={{once: true}}
                transition={{duration: 0.5, delay: index * 0.1}}
                className="text-center"
              >
                <div className="text-4xl font-bold text-[#f59e0b] mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
