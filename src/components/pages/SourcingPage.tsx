import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { CheckCircle, Eye, Shield, Package } from 'lucide-react';
import { Button } from '../ui/button';

export function SourcingPage() {
  const navigate = useNavigate();
  const processes = [
    {
      icon: Eye,
      title: 'On-Ground Supplier Verification',
      description: 'Our team physically verifies each supplier facility, ensuring they meet international quality standards and ethical practices.',
    },
    {
      icon: CheckCircle,
      title: 'Harvest Monitoring',
      description: 'We monitor crops from cultivation through harvest, ensuring optimal quality and adherence to organic/conventional standards.',
    },
    {
      icon: Shield,
      title: 'Pre-Shipment Inspection',
      description: 'Comprehensive quality checks including laboratory testing, grading, and packaging verification before export.',
    },
    {
      icon: Package,
      title: 'Sample-Matched Exports',
      description: 'Every shipment matches approved samples exactly, maintaining consistency across all orders.',
    },
  ];

  const certifications = [
    { name: 'FSSAI', description: 'Food Safety Standards Authority of India' },
    { name: 'APEDA', description: 'Agricultural & Processed Food Products Export' },
    { name: 'ISO 22000', description: 'Food Safety Management' },
    { name: 'HACCP', description: 'Hazard Analysis Critical Control Points' },
    { name: 'HALAL', description: 'Islamic Dietary Standards' },
    { name: 'KOSHER', description: 'Jewish Dietary Certification' },
    { name: 'USDA Organic', description: 'United States Organic Certification' },
    { name: 'EU Organic', description: 'European Union Organic Standards' },
  ];

  const privateLabelServices = [
    'Custom product formulations',
    'White-label packaging design',
    'Brand compliance & labeling',
    'Export documentation support',
    'Retail-ready packaging solutions',
    'Minimum order flexibility',
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-96 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1574461567212-cf907a224825?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXJtJTIwaW5zcGVjdGlvbiUyMHF1YWxpdHl8ZW58MXx8fHwxNzY3MTcwNTkwfDA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Farm Inspection"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1e3a5f]/90 to-[#1e3a5f]/70" />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-2xl"
            >
              <h1 className="text-white mb-4">From Farm to Port</h1>
              <p className="text-xl text-white/90">
                Our Commitment to Quality, Transparency, and Compliance
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quality Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-[#1e3a5f] mb-4">Our Quality Assurance Process</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Every product undergoes rigorous quality control at every stage of the supply chain
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {processes.map((process, index) => (
              <motion.div
                key={process.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex gap-6 p-6 rounded-lg border border-gray-200 hover:border-[#1e3a5f]/30 hover:shadow-md transition-all"
              >
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 rounded-full bg-[#1e3a5f]/10 flex items-center justify-center">
                    <process.icon className="w-7 h-7 text-[#1e3a5f]" />
                  </div>
                </div>
                <div>
                  <h3 className="text-[#1e3a5f] mb-2">{process.title}</h3>
                  <p className="text-gray-600">{process.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-[#1e3a5f] mb-4">Certifications & Compliance</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our products meet and exceed international quality and safety standards
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center"
              >
                <div className="w-16 h-16 rounded-full bg-[#f59e0b]/10 flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-[#f59e0b]" />
                </div>
                <h4 className="font-semibold text-[#1e3a5f] mb-1">{cert.name}</h4>
                <p className="text-xs text-gray-600">{cert.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 bg-white rounded-lg shadow-sm p-8 border-l-4 border-[#f59e0b]"
          >
            <div className="flex items-start gap-4">
              <CheckCircle className="w-6 h-6 text-[#f59e0b] flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold text-[#1e3a5f] mb-2">FDA Compliance Available</h4>
                <p className="text-gray-600">
                  For products destined to the United States, we ensure full compliance with FDA regulations
                  and can provide necessary documentation for smooth customs clearance.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Private Label Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-[#1e3a5f] mb-6">Private Label Services</h2>
              <p className="text-gray-600 mb-6">
                Build your brand with our comprehensive white-label solutions. We handle everything
                from product development to export-ready packaging, allowing you to focus on your market.
              </p>

              <div className="space-y-3 mb-8">
                {privateLabelServices.map((service, index) => (
                  <motion.div
                    key={service}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-[#f59e0b] flex-shrink-0" />
                    <span className="text-gray-700">{service}</span>
                  </motion.div>
                ))}
              </div>

              <Button
                onClick={() => navigate('/contact')}
                className="bg-[#1e3a5f] hover:bg-[#152d47] text-white px-8"
              >
                Discuss Your Private Label Needs
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="aspect-square rounded-lg overflow-hidden shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1668916938366-dd16c56719e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGljZSUyMHBsYW50YXRpb24lMjBrZXJhbGF8ZW58MXx8fHwxNzY3MTcwNTg3fDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Quality Control"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-[#f59e0b] text-white p-6 rounded-lg shadow-lg max-w-xs">
                <p className="text-sm">
                  <span className="font-semibold">Quality Promise:</span> Every batch tested, every
                  shipment certified, every client satisfied.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#1e3a5f] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mb-4">Ready to Experience Quality-First Sourcing?</h2>
            <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
              Let's discuss how we can meet your specific requirements with our proven quality processes
            </p>
            <Button
              onClick={() => navigate('/contact')}
              className="bg-[#f59e0b] hover:bg-[#d97706] text-white px-8"
            >
              Contact Our Team
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
