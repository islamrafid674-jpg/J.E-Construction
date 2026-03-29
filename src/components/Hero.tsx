import { motion } from "motion/react";
import { ArrowRight, PhoneCall } from "lucide-react";
import { Magnetic } from "./Magnetic";

export function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 noise-bg" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/50" />
      </div>

      <div className="container relative z-10 px-4 sm:px-6 lg:px-8 mx-auto flex flex-col items-start text-left">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl"
        >
          <motion.div variants={itemVariants} className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-white/20">
            <span className="w-2 h-2 rounded-full bg-brand-gray animate-pulse" />
            <span className="text-xs font-semibold tracking-widest uppercase text-gray-300">
              Premium Siding Specialists
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-white mb-6 leading-[1.1]"
          >
            Transform Your <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-300 to-brand-gray text-glow">
              Home's Exterior
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl font-light leading-relaxed"
          >
            Expert fiber cement siding installation and remodeling services. We deliver quality craftsmanship with meticulous attention to detail.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-start sm:items-center justify-start gap-4"
          >
            <Magnetic>
              <a
                href="tel:818791527"
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white text-black px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-200 transition-all active:scale-95 shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)]"
              >
                <PhoneCall className="w-5 h-5" />
                Get Free Estimate
              </a>
            </Magnetic>
            <Magnetic>
              <a
                href="#services"
                className="w-full sm:w-auto flex items-center justify-center gap-2 glass px-8 py-4 rounded-full font-semibold text-lg text-white hover:bg-white/10 transition-all active:scale-95 group"
              >
                Explore Services
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Magnetic>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs uppercase tracking-widest text-gray-500 font-medium">Scroll</span>
        <div className="w-[1px] h-12 bg-gray-800 relative overflow-hidden">
          <motion.div
            className="absolute top-0 left-0 w-full h-1/2 bg-brand-gray"
            animate={{ y: ["0%", "200%"] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
          />
        </div>
      </motion.div>
    </section>
  );
}
