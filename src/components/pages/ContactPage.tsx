import {motion} from "motion/react";
import {MapPin, Phone, Mail, Clock, Send, CheckCircle, AlertCircle} from "lucide-react";
import {Button} from "../ui/button";
import {Input} from "../ui/input";
import {Textarea} from "../ui/textarea";
import {useState} from "react";
import React from "react";
import {CONTACT, CONTACT_INDIA} from "../../config/contact";
import {EMAILJS_CONFIG, createEmailJSParams} from "../../config/emailjs";
import emailjs from "@emailjs/browser";

export function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({type: null, message: ""});

  // Initialize EmailJS
  React.useEffect(() => {
    if (EMAILJS_CONFIG.publicKey && EMAILJS_CONFIG.publicKey !== "YOUR_PUBLIC_KEY") {
      emailjs.init(EMAILJS_CONFIG.publicKey);
    }
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    // Clear status message when user starts typing
    if (submitStatus.type) {
      setSubmitStatus({type: null, message: ""});
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Check if EmailJS is configured
    if (
      EMAILJS_CONFIG.publicKey === "YOUR_PUBLIC_KEY" ||
      EMAILJS_CONFIG.serviceId === "YOUR_SERVICE_ID" ||
      EMAILJS_CONFIG.templateId === "YOUR_TEMPLATE_ID"
    ) {
      setSubmitStatus({
        type: "error",
        message: "EmailJS is not configured. Please set up your EmailJS credentials in the config file.",
      });
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus({type: null, message: ""});

    try {
      // Prepare template parameters using helper function
      const templateParams = createEmailJSParams({
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        company: formData.company,
        message: formData.message,
      });

      // Send email using EmailJS
      await emailjs.send(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.templateId,
        templateParams
      );

      // Success
      setSubmitStatus({
        type: "success",
        message: "Thank you! Your message has been sent successfully. We'll get back to you soon.",
      });

      // Reset form
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        company: "",
        message: "",
      });
    } catch (error) {
      console.error("EmailJS Error:", error);
      setSubmitStatus({
        type: "error",
        message: "Sorry, there was an error sending your message. Please try again later or contact us directly.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <header className="relative bg-gradient-to-r from-[#1e3a5f] to-[#24446c] text-white py-24 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <svg className="w-full h-full opacity-20" viewBox="0 0 1440 320" fill="none">
            <path
              d="M0,96L40,101.3C80,107,160,117,240,112C320,107,400,85,480,112C560,139,640,213,720,218.7C800,224,880,160,960,160C1040,160,1120,224,1200,202.7C1280,181,1360,75,1400,21.3L1440,0L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
              fill="#fff"
              fillOpacity="0.08"
            />
          </svg>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{opacity: 0, scale: 0.95, y: 36}}
            animate={{opacity: 1, scale: 1, y: 0}}
            transition={{duration: 0.7}}
          >
            <span className="inline-block bg-[#] text-[#f59e0b] rounded-full px-5 py-1 text-sm font-semibold mb-5 shadow-md tracking-wide">
              Contact VyanaGlobal
            </span>
            <h1 className="mb-5 font-bold text-4xl md:text-5xl drop-shadow-lg bg-gradient-to-r from-[#f59e0b] to-[#1e3a5f] bg-clip-text text-transparent">
              Let's Connect &amp; Grow Together
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
              Have questions or want to discuss a partnership? Reach out to our team &mdash; we’re excited to help you unlock new sourcing opportunities.
            </p>
          </motion.div>
        </div>
      </header>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{opacity: 0, x: -20}}
              animate={{opacity: 1, x: 0}}
              transition={{duration: 0.6}}
              className="bg-white rounded-lg shadow-sm p-8"
            >
              <h2 className="text-[#1e3a5f] mb-6">Send Us a Message</h2>
              
              {/* Status Message */}
              {submitStatus.type && (
                <motion.div
                  initial={{opacity: 0, y: -10}}
                  animate={{opacity: 1, y: 0}}
                  className={`p-4 rounded-lg mb-6 flex items-start gap-3 ${
                    submitStatus.type === "success"
                      ? "bg-green-50 text-green-800 border border-green-200"
                      : "bg-red-50 text-red-800 border border-red-200"
                  }`}
                >
                  {submitStatus.type === "success" ? (
                    <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  ) : (
                    <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  )}
                  <p className="text-sm">{submitStatus.message}</p>
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      First Name *
                    </label>
                    <Input
                      id="firstName"
                      name="firstName"
                      type="text"
                      required
                      value={formData.firstName || ""}
                      onChange={handleChange}
                      className="w-full"
                      placeholder="Enter your first name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="lastName"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Last Name *
                    </label>
                    <Input
                      id="lastName"
                      name="lastName"
                      type="text"
                      required
                      value={formData.lastName || ""}
                      onChange={handleChange}
                      className="w-full"
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Email Address *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="company"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Company Name
                  </label>
                  <Input
                    id="company"
                    name="company"
                    type="text"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full"
                    placeholder="Company or organization name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full min-h-32"
                    placeholder="Share your project details, questions, or how we can help..."
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#1e3a5f] hover:bg-[#152d47] text-white disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 mr-2 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </motion.div>

            {/* Office Information */}
            <motion.div
              initial={{opacity: 0, x: 20}}
              animate={{opacity: 1, x: 0}}
              transition={{duration: 0.6}}
              className="space-y-8"
            >
              {/* Paris Office */}
              <div className="bg-white rounded-lg shadow-sm p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-16 h-16 rounded-full bg-[#1e3a5f]/10 flex items-center justify-center flex-shrink-0">
                    <img
                      src="https://images.unsplash.com/photo-1570097703229-b195d6dd291f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlaWZmZWwlMjB0b3dlciUyMHBhcmlzfGVufDF8fHx8MTc2NzEwNzg4M3ww&ixlib=rb-4.1.0&q=80&w=1080"
                      alt="Paris"
                      className="w-full h-full rounded-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-[#1e3a5f] mb-1">
                      European Headquarters
                    </h3>
                    <p className="text-gray-600">Paris, France</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-[#f59e0b] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-gray-900">Address</p>
                      <p className="text-gray-600 text-sm">Paris, France</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-[#f59e0b] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-gray-900">Phone</p>
                      <p className="text-gray-600 text-sm">
                        {CONTACT.phoneDisplay}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-[#f59e0b] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-gray-900">Email</p>
                      <p className="text-gray-600 text-sm">{CONTACT.email}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Rajasthan Office */}
              <div className="bg-white rounded-lg shadow-sm p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-16 h-16 rounded-full bg-[#f59e0b]/10 flex items-center justify-center flex-shrink-0">
                    <img
                      src="https://s7ap1.scene7.com/is/image/incredibleindia/hawa-mahal-jaipur-rajasthan-city-1-hero?qlt=82&ts=1742200253577"
                      alt="Rajasthan"
                      className="w-full h-full rounded-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-[#1e3a5f] mb-1">
                      India Sourcing Office
                    </h3>
                    <p className="text-gray-600">{CONTACT_INDIA.location}</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-[#f59e0b] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-gray-900">Address</p>
                      <p className="text-gray-600 text-sm">
                        {CONTACT_INDIA.location}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-[#f59e0b] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-gray-900">Phone</p>
                      <p className="text-gray-600 text-sm">
                        {CONTACT_INDIA.phoneDisplay}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-[#f59e0b] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-gray-900">Email</p>
                      <p className="text-gray-600 text-sm">{CONTACT.email}</p>
                    </div>
                  </div>
                </div>
              </div>

              
            </motion.div>
          </div>
        </div>
      </section>

    
    </div>
  );
}
