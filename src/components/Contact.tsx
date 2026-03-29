import { motion } from "motion/react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 bg-black relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center"
          >
            <div className="mb-12">
              <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
                Let's Build <br />
                <span className="text-brand-gray">Together</span>
              </h2>
              <p className="text-gray-400 text-lg font-light max-w-md">
                Ready for a home transformation? Contact us today for a free estimate on your siding project.
              </p>
            </div>

            <div className="space-y-8">
              <a href="tel:818791527" className="flex items-center gap-6 group">
                <div className="w-16 h-16 rounded-full glass flex items-center justify-center text-white group-hover:bg-brand-gray group-hover:text-black transition-all duration-300">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 uppercase tracking-widest font-medium mb-1">Call Us</p>
                  <p className="text-2xl font-semibold text-white group-hover:text-brand-gray transition-colors">818-791-527</p>
                </div>
              </a>

              <a href="mailto:professionalsiding09@gmail.com" className="flex items-center gap-6 group">
                <div className="w-16 h-16 rounded-full glass flex items-center justify-center text-white group-hover:bg-brand-gray group-hover:text-black transition-all duration-300">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 uppercase tracking-widest font-medium mb-1">Email Us</p>
                  <p className="text-lg font-semibold text-white group-hover:text-brand-gray transition-colors break-all">
                    professionalsiding09@gmail.com
                  </p>
                </div>
              </a>

              <div className="flex items-center gap-6 group">
                <div className="w-16 h-16 rounded-full glass flex items-center justify-center text-white group-hover:bg-brand-gray group-hover:text-black transition-all duration-300">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 uppercase tracking-widest font-medium mb-1">Service Area</p>
                  <p className="text-lg font-semibold text-white group-hover:text-brand-gray transition-colors">
                    Contact for locations
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="glass-card p-8 md:p-12 rounded-[2rem] relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-[2rem] pointer-events-none" />
            
            <form className="relative z-10 space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-6">
                <div className="relative group">
                  <input
                    type="text"
                    id="name"
                    required
                    className="w-full bg-transparent border-b border-white/20 py-4 text-white focus:outline-none focus:border-brand-gray transition-colors peer placeholder-transparent"
                    placeholder="Name"
                  />
                  <label
                    htmlFor="name"
                    className="absolute left-0 top-4 text-gray-500 text-lg transition-all peer-focus:-top-3 peer-focus:text-xs peer-focus:text-brand-gray peer-valid:-top-3 peer-valid:text-xs peer-valid:text-brand-gray cursor-text"
                  >
                    Full Name
                  </label>
                </div>

                <div className="relative group">
                  <input
                    type="email"
                    id="email"
                    required
                    className="w-full bg-transparent border-b border-white/20 py-4 text-white focus:outline-none focus:border-brand-gray transition-colors peer placeholder-transparent"
                    placeholder="Email"
                  />
                  <label
                    htmlFor="email"
                    className="absolute left-0 top-4 text-gray-500 text-lg transition-all peer-focus:-top-3 peer-focus:text-xs peer-focus:text-brand-gray peer-valid:-top-3 peer-valid:text-xs peer-valid:text-brand-gray cursor-text"
                  >
                    Email Address
                  </label>
                </div>

                <div className="relative group">
                  <input
                    type="tel"
                    id="phone"
                    required
                    className="w-full bg-transparent border-b border-white/20 py-4 text-white focus:outline-none focus:border-brand-gray transition-colors peer placeholder-transparent"
                    placeholder="Phone"
                  />
                  <label
                    htmlFor="phone"
                    className="absolute left-0 top-4 text-gray-500 text-lg transition-all peer-focus:-top-3 peer-focus:text-xs peer-focus:text-brand-gray peer-valid:-top-3 peer-valid:text-xs peer-valid:text-brand-gray cursor-text"
                  >
                    Phone Number
                  </label>
                </div>

                <div className="relative group pt-4">
                  <textarea
                    id="message"
                    required
                    rows={4}
                    className="w-full bg-transparent border-b border-white/20 py-4 text-white focus:outline-none focus:border-brand-gray transition-colors peer placeholder-transparent resize-none"
                    placeholder="Message"
                  />
                  <label
                    htmlFor="message"
                    className="absolute left-0 top-8 text-gray-500 text-lg transition-all peer-focus:top-0 peer-focus:text-xs peer-focus:text-brand-gray peer-valid:top-0 peer-valid:text-xs peer-valid:text-brand-gray cursor-text"
                  >
                    Tell us about your project
                  </label>
                </div>
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-3 bg-white text-black py-5 rounded-full font-bold text-lg hover:bg-brand-gray hover:text-white transition-all active:scale-95 group shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(126,125,128,0.4)]"
              >
                Send Message
                <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
