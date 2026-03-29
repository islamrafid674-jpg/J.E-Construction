import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Phone } from "lucide-react";

export function MobileCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show CTA after scrolling past hero section
      setIsVisible(window.scrollY > window.innerHeight * 0.5);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-6 left-4 right-4 z-40 md:hidden"
        >
          <a
            href="tel:818791527"
            className="flex items-center justify-center gap-3 w-full bg-brand-gray text-black py-4 rounded-full font-bold text-lg shadow-[0_8px_32px_rgba(126,125,128,0.4)] active:scale-95 transition-transform"
          >
            <Phone className="w-5 h-5" />
            Call Now: 818-791-527
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
