import { motion } from "motion/react";
import { Star } from "lucide-react";

export function TrustBanner() {
  const items = [
    "Premium Siding Installation",
    "Fiber Cement Specialists",
    "Free Estimates",
    "Quality Craftsmanship",
    "Attention to Detail",
    "Home Transformations",
  ];

  // Duplicate items to ensure smooth infinite scroll
  const marqueeItems = [...items, ...items, ...items];

  return (
    <div className="w-full bg-brand-gray/10 border-y border-white/5 py-4 overflow-hidden relative flex items-center">
      {/* Gradient masks for smooth fade at edges */}
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

      <motion.div
        className="flex whitespace-nowrap items-center"
        animate={{ x: ["0%", "-33.33%"] }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 20,
        }}
      >
        {marqueeItems.map((item, index) => (
          <div key={index} className="flex items-center mx-8">
            <span className="text-sm md:text-base font-medium tracking-wider uppercase text-gray-300">
              {item}
            </span>
            <Star className="w-4 h-4 mx-8 text-brand-gray fill-brand-gray/20" />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
