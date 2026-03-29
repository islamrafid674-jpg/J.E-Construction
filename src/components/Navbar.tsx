import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Phone, Instagram, Facebook } from "lucide-react";
import { cn } from "@/lib/utils";
import { Magnetic } from "./Magnetic";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "Gallery", href: "#gallery" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled ? "py-4" : "py-6"
        )}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={cn(
              "flex items-center justify-between rounded-full px-6 py-3 transition-all duration-500",
              isScrolled ? "glass shadow-lg" : "bg-transparent"
            )}
          >
            {/* Logo */}
            <a href="#" className="flex items-center gap-2 group">
              <img 
                src="https://i.imgur.com/ClccMDK.png" 
                alt="J.E Construction Logo" 
                className="h-16 md:h-20 w-auto object-contain"
                referrerPolicy="no-referrer"
              />
            </a>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium text-gray-300 hover:text-white transition-colors relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-gray transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </div>

            {/* Desktop Actions */}
            <div className="hidden md:flex items-center gap-4">
              <div className="flex items-center gap-3 mr-4 border-r border-white/20 pr-4">
                <Magnetic>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors block p-2">
                    <Instagram className="w-5 h-5" />
                  </a>
                </Magnetic>
                <Magnetic>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors block p-2">
                    <Facebook className="w-5 h-5" />
                  </a>
                </Magnetic>
              </div>
              <Magnetic>
                <a
                  href="tel:818791527"
                  className="flex items-center gap-2 bg-white text-black px-5 py-2.5 rounded-full font-semibold text-sm hover:bg-brand-gray hover:text-white transition-all active:scale-95 shadow-[0_0_15px_rgba(255,255,255,0.3)] hover:shadow-[0_0_20px_rgba(126,125,128,0.5)]"
                >
                  <Phone className="w-4 h-4" />
                  Call Now
                </a>
              </Magnetic>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden text-white p-2 active:scale-95 transition-transform"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex flex-col"
          >
            <div className="flex justify-end p-6">
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 text-white/70 hover:text-white bg-white/10 rounded-full active:scale-95 transition-all"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="flex-1 flex flex-col items-center justify-center gap-8 p-8">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 20, opacity: 0 }}
                  transition={{ delay: i * 0.1 }}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-3xl font-bold text-white hover:text-brand-gray transition-colors"
                >
                  {link.name}
                </motion.a>
              ))}
              
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 20, opacity: 0 }}
                transition={{ delay: 0.4 }}
                className="flex gap-6 mt-8"
              >
                <a href="#" className="p-3 glass rounded-full text-white">
                  <Instagram className="w-6 h-6" />
                </a>
                <a href="#" className="p-3 glass rounded-full text-white">
                  <Facebook className="w-6 h-6" />
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
