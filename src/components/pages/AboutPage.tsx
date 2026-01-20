import {useNavigate} from "react-router-dom";
import {motion} from "motion/react";
import {
  Target,
  Heart,
  Lightbulb,
  Users,
  Globe,
  TrendingUp,
  Award,
  CheckCircle,
} from "lucide-react";
import {Button} from "../ui/button";

export function AboutPage() {
  const navigate = useNavigate();
  const values = [
    {
      icon: Heart,
      title: "Integrity",
      description:
        "Honest, transparent business practices in every transaction and relationship.",
    },
    {
      icon: Award,
      title: "Quality Excellence",
      description:
        "Uncompromising commitment to delivering premium products that exceed expectations.",
    },
    {
      icon: Users,
      title: "Partnership",
      description:
        "Building long-term relationships based on trust, reliability, and mutual growth.",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description:
        "Continuously improving processes and embracing new solutions for better service.",
    },
  ];


  const stats = [
    {number: "500+", label: "Verified Suppliers"},
    {number: "20+", label: "Countries Served Across Europe, Middle East & Africa"},
    {number: "500+", label: "Shipments Delivered Globally"},
    {number: "98%", label: "On-Time Delivery Rate"},
  ];

  const team = [
    {
      name: "Executive Leadership",
      description:
        "Experienced professionals with deep expertise in international trade, agriculture, and quality management.",
    },
    {
      name: "Sourcing Team",
      description:
        "On-ground experts across India ensuring supplier verification and quality monitoring.",
    },
    {
      name: "Quality Assurance",
      description:
        "Certified food safety specialists managing testing, compliance, and documentation.",
    },
    {
      name: "Logistics Specialists",
      description:
        "Supply chain experts managing seamless delivery from farm to your facility.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[500px] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1758599543152-a73184816eba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW5kc2hha2UlMjBwYXJ0bmVyc2hpcCUyMGJ1c2luZXNzfGVufDF8fHx8MTc2NzE2Nzc3Mnww&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Partnership"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1e3a5f]/95 to-[#1e3a5f]/80" />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <motion.div
              initial={{opacity: 0, y: 30}}
              animate={{opacity: 1, y: 0}}
              transition={{duration: 0.8}}
              className="max-w-3xl"
            >
              <h1 className="mb-6 text-5xl md:text-6xl font-bold">
                <span className="text-[#1e3a5f] drop-shadow-[0_0_8px_rgba(255,255,255,0.9),0_0_16px_rgba(255,255,255,0.5)]">Vyana</span>
                <span className="text-[#f59e0b]">Global</span>
              </h1>
              <p className="text-xl text-white/90 leading-relaxed">
                A global export partner connecting India's food, agricultural, and healthcare products with international markets through quality, compliance, and reliability.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{opacity: 0, x: -20}}
              whileInView={{opacity: 1, x: 0}}
              viewport={{once: true}}
              transition={{duration: 0.6}}
            >
              <h2 className="text-[#1e3a5f] mb-6 text-3xl md:text-4xl font-bold">Our Story</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  VyanaGlobal was born from a simple observation: the world's
                  demand for authentic, high-quality Indian agricultural
                  products was growing, but the supply chain lacked transparency
                  and reliability.
                </p>
                <p>
                  Founded in Paris in 2018 by a team of trade veterans and
                  agricultural specialists, we set out to build a bridge—not
                  just between India and Europe, but between tradition and
                  innovation, between local farmers and global markets.
                </p>
                <p>
                  Today, we combine European business standards with deep Indian
                  agricultural knowledge. Our dual-office structure allows us to
                  maintain close relationships with both our sourcing partners
                  in India and our clients across Europe, the Middle East, and
                  Africa.
                </p>
                <p>
                  Every product we export tells a story of careful cultivation,
                  rigorous quality control, and sustainable practices. We're not
                  just moving commodities—we're sharing India's agricultural
                  heritage with the world.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{opacity: 0, x: 20}}
              whileInView={{opacity: 1, x: 0}}
              viewport={{once: true}}
              transition={{duration: 0.6}}
              className="relative"
            >
              <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-xl border-4 border-[#f59e0b]/20 hover:border-[#f59e0b]/40 transition-all duration-300">
                <img
                  src="https://images.unsplash.com/photo-1709715357520-5e1047a2b691?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHRlYW0lMjBtZWV0aW5nfGVufDF8fHx8MTc2NzE0MjMwNXww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Team Meeting"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{opacity: 0, y: 20}}
              whileInView={{opacity: 1, y: 0}}
              viewport={{once: true}}
              transition={{duration: 0.6}}
              className="bg-white rounded-lg shadow-sm p-8 border-l-4 border-[#1e3a5f]"
            >
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#1e3a5f]/10 to-[#f59e0b]/10 flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-[#1e3a5f]" />
              </div>
              <h2 className="text-[#1e3a5f] mb-4 text-2xl font-bold">Our Mission</h2>
              <p className="text-gray-700">
                To source, process, and export high-quality Indian food, agricultural, and healthcare products, ensuring consistency, compliance, and reliability for international buyers.
              </p>
            </motion.div>

            <motion.div
              initial={{opacity: 0, y: 20}}
              whileInView={{opacity: 1, y: 0}}
              viewport={{once: true}}
              transition={{duration: 0.6, delay: 0.1}}
              className="bg-white rounded-lg shadow-sm p-8 border-l-4 border-[#f59e0b]"
            >
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#f59e0b]/10 to-[#1e3a5f]/10 flex items-center justify-center mb-6">
                <TrendingUp className="w-7 h-7 text-[#f59e0b]" />
              </div>
              <h2 className="text-[#1e3a5f] mb-4 text-2xl font-bold">Our Vision</h2>
              <p className="text-gray-700">
                To be the most trusted bridge between India's trusted producers and global markets, setting the standard for quality, innovation, and sustainable global trade.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{opacity: 0, y: 20}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true}}
            transition={{duration: 0.6}}
            className="text-center mb-12"
          >
            <h2 className="text-[#1e3a5f] mb-4 text-3xl md:text-4xl font-bold">Our Core Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The principles that guide every decision we make and every
              relationship we build
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{opacity: 0, y: 20}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true}}
                transition={{duration: 0.6, delay: index * 0.1}}
                className="text-center bg-gradient-to-br from-white to-gray-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-[#f59e0b]/30"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#1e3a5f]/10 to-[#f59e0b]/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <value.icon className="w-8 h-8 text-[#1e3a5f] group-hover:text-[#f59e0b] transition-colors" />
                </div>
                <h3 className="text-[#1e3a5f] mb-3 font-semibold text-lg">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Operating Model */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{opacity: 0, y: 20}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true}}
            transition={{duration: 0.6}}
            className="text-center mb-12"
          >
            <h2 className="text-[#1e3a5f] mb-4 text-3xl md:text-4xl font-bold">Our Operating Model</h2>
            <p className="text-gray-600 max-w-3xl mx-auto mb-8">
              Our business model combines <strong className="text-[#1e3a5f]">on-ground sourcing strength in India</strong> with <strong className="text-[#1e3a5f]">international market expertise in Europe</strong>, enabling:
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div
                initial={{opacity: 0, x: -20}}
                whileInView={{opacity: 1, x: 0}}
                viewport={{once: true}}
                transition={{duration: 0.6}}
                className="bg-white rounded-lg shadow-md p-6 border-l-4 border-[#1e3a5f] hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-[#1e3a5f]/10 flex items-center justify-center mb-4">
                  <CheckCircle className="w-6 h-6 text-[#f59e0b]" />
                </div>
                <h3 className="text-[#1e3a5f] mb-2 font-semibold text-lg">Transparent sourcing and quality control</h3>
              </motion.div>

              <motion.div
                initial={{opacity: 0, x: 20}}
                whileInView={{opacity: 1, x: 0}}
                viewport={{once: true}}
                transition={{duration: 0.6, delay: 0.1}}
                className="bg-white rounded-lg shadow-md p-6 border-l-4 border-[#f59e0b] hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-[#f59e0b]/10 flex items-center justify-center mb-4">
                  <CheckCircle className="w-6 h-6 text-[#f59e0b]" />
                </div>
                <h3 className="text-[#1e3a5f] mb-2 font-semibold text-lg">Compliance with destination-market standards</h3>
              </motion.div>

              <motion.div
                initial={{opacity: 0, x: -20}}
                whileInView={{opacity: 1, x: 0}}
                viewport={{once: true}}
                transition={{duration: 0.6, delay: 0.2}}
                className="bg-white rounded-lg shadow-md p-6 border-l-4 border-[#1e3a5f] hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-[#1e3a5f]/10 flex items-center justify-center mb-4">
                  <CheckCircle className="w-6 h-6 text-[#f59e0b]" />
                </div>
                <h3 className="text-[#1e3a5f] mb-2 font-semibold text-lg">Reliable logistics and documentation support</h3>
              </motion.div>

              <motion.div
                initial={{opacity: 0, x: 20}}
                whileInView={{opacity: 1, x: 0}}
                viewport={{once: true}}
                transition={{duration: 0.6, delay: 0.3}}
                className="bg-white rounded-lg shadow-md p-6 border-l-4 border-[#f59e0b] hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-[#f59e0b]/10 flex items-center justify-center mb-4">
                  <CheckCircle className="w-6 h-6 text-[#f59e0b]" />
                </div>
                <h3 className="text-[#1e3a5f] mb-2 font-semibold text-lg">Long-term supply partnerships</h3>
              </motion.div>
            </div>

            <motion.div
              initial={{opacity: 0, y: 20}}
              whileInView={{opacity: 1, y: 0}}
              viewport={{once: true}}
              transition={{duration: 0.6, delay: 0.4}}
              className="mt-8 text-center"
            >
              <p className="text-gray-700 text-lg">
                We focus on consistency, traceability, and buyer confidence across every shipment.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 bg-[#1e3a5f] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{opacity: 0, scale: 0.9}}
                whileInView={{opacity: 1, scale: 1}}
                viewport={{once: true}}
                transition={{duration: 0.5, delay: index * 0.1}}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-[#f59e0b] mb-2">
                  {stat.number}
                </div>
                <div className="text-white/80 text-sm md:text-base leading-tight">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{opacity: 0, y: 20}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true}}
            transition={{duration: 0.6}}
            className="text-center mb-12"
          >
            <h2 className="text-[#1e3a5f] mb-4 text-3xl md:text-4xl font-bold">Our Team</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A diverse group of professionals united by a passion for quality
              and excellence
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {team.map((department, index) => (
              <motion.div
                key={department.name}
                initial={{opacity: 0, y: 20}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true}}
                transition={{duration: 0.6, delay: index * 0.1}}
                className="bg-gradient-to-br from-white to-gray-50 rounded-lg p-6 flex items-start gap-4 border border-gray-100 hover:border-[#f59e0b]/30 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-full bg-[#f59e0b]/10 flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="w-6 h-6 text-[#f59e0b]" />
                </div>
                <div>
                  <h3 className="text-[#1e3a5f] mb-2 font-semibold text-lg">{department.name}</h3>
                  <p className="text-gray-600 leading-relaxed">{department.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{opacity: 0, y: 20}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true}}
            transition={{duration: 0.6, delay: 0.3}}
            className="mt-12"
          >
            <div className="relative aspect-video rounded-lg overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1703227373720-cff89520dd31?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXJlaG91c2UlMjBsb2dpc3RpY3MlMjBnbG9iYWx8ZW58MXx8fHwxNzY3MTcxMzMwfDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Warehouse Operations"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <h3 className="mb-2">Working at VyanaGlobal</h3>
                <p className="text-white/90">
                  We're always looking for passionate individuals who share our
                  commitment to excellence and sustainability.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{opacity: 0, y: 20}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true}}
            transition={{duration: 0.6}}
            className="text-center mb-12"
          >
            <h2 className="text-[#1e3a5f] mb-4 text-3xl md:text-4xl font-bold">Why Partner With Us</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              What sets VyanaGlobal apart in the competitive world of Food and Agri Exports
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{opacity: 0, y: 20}}
              whileInView={{opacity: 1, y: 0}}
              viewport={{once: true}}
              transition={{duration: 0.6}}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl hover:scale-105 transition-all duration-300 border border-gray-100 hover:border-[#f59e0b]/30"
            >
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#1e3a5f]/10 to-[#f59e0b]/10 flex items-center justify-center mb-4">
                <Globe className="w-8 h-8 text-[#1e3a5f]" />
              </div>
              <h3 className="text-[#1e3a5f] mb-3 font-semibold text-xl">Dual Presence</h3>
              <p className="text-gray-600 leading-relaxed">
                European base in Paris and on-ground sourcing operations in India help us bridge markets efficiently, delivering consistent quality and timely supply.
              </p>
            </motion.div>

            <motion.div
              initial={{opacity: 0, y: 20}}
              whileInView={{opacity: 1, y: 0}}
              viewport={{once: true}}
              transition={{duration: 0.6, delay: 0.1}}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl hover:scale-105 transition-all duration-300 border border-gray-100 hover:border-[#f59e0b]/30"
            >
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#f59e0b]/10 to-[#1e3a5f]/10 flex items-center justify-center mb-4">
                <Award className="w-8 h-8 text-[#f59e0b]" />
              </div>
              <h3 className="text-[#1e3a5f] mb-3 font-semibold text-xl">Quality First</h3>
              <p className="text-gray-600 leading-relaxed">
                Certified suppliers, lab-tested samples, and stringent quality checks ensure every shipment meets international standards and buyer expectations.
              </p>
            </motion.div>

            <motion.div
              initial={{opacity: 0, y: 20}}
              whileInView={{opacity: 1, y: 0}}
              viewport={{once: true}}
              transition={{duration: 0.6, delay: 0.2}}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl hover:scale-105 transition-all duration-300 border border-gray-100 hover:border-[#f59e0b]/30"
            >
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#1e3a5f]/10 to-[#f59e0b]/10 flex items-center justify-center mb-4">
                <Users className="w-8 h-8 text-[#1e3a5f]" />
              </div>
              <h3 className="text-[#1e3a5f] mb-3 font-semibold text-xl">Customer-Centric Partnership</h3>
              <p className="text-gray-600 leading-relaxed">
                We don't just deliver products, we build lasting relationships with tailored solutions, flexible packaging, and dedicated support to meet your business needs every step of the way.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#1e3a5f] to-[#24446c] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%221%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')]"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{opacity: 0, y: 20}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true}}
            transition={{duration: 0.6}}
            className="text-center"
          >
            <h2 className="mb-4 text-3xl md:text-4xl font-bold">Ready to Start Your Journey With Us?</h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Experience the VyanaGlobal difference—where quality meets
              reliability, and partnerships thrive.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => navigate("/products")}
                className="bg-[#f59e0b] hover:bg-[#d97706] text-white px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                Explore Products
              </Button>
              <Button
                onClick={() => navigate("/contact")}
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-[#1e3a5f] px-8 py-6 text-lg font-semibold transition-all duration-300 hover:scale-105"
              >
                Get in Touch
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
