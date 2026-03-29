import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

export function ParallaxBreak() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 1, 0.3]);

  return (
    <section ref={ref} className="relative h-[60vh] md:h-[80vh] overflow-hidden flex items-center justify-center">
      <motion.div
        style={{ y }}
        className="absolute inset-0 w-full h-[140%] -top-[20%] bg-[url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop')] bg-cover bg-center"
      />
      <div className="absolute inset-0 bg-black/60 backdrop-blur-[1px]" />
      
      <motion.div 
        style={{ opacity }}
        className="relative z-10 text-center px-4 max-w-4xl mx-auto"
      >
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-white mb-6">
          Built to Last. <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gray to-white">Designed to Impress.</span>
        </h2>
        <p className="text-xl text-gray-300 font-light">
          Elevating homes with premium siding solutions.
        </p>
      </motion.div>
    </section>
  );
}
