import { motion } from "motion/react";
import { ArrowUpRight, Hammer, ShieldCheck, Home } from "lucide-react";
import { TiltCard } from "./TiltCard";

const services = [
  {
    title: "Fiber Cement Siding",
    description: "Durable, weather-resistant, and low-maintenance siding solutions for modern homes.",
    icon: <Home className="w-6 h-6" />,
    image: "https://www.holemaninc.com/wp-content/uploads/2019/08/Siding-Installation-3.jpg",
    colSpan: "md:col-span-2",
  },
  {
    title: "Exterior Upgrades",
    description: "Complete home exterior transformations that boost curb appeal and value.",
    icon: <Hammer className="w-6 h-6" />,
    image: "https://www.fortunebuilders.com/wp-content/uploads/2019/03/house-exterior-styles.jpg",
    colSpan: "md:col-span-1",
  },
  {
    title: "Quality Craftsmanship",
    description: "Meticulous attention to detail in every installation.",
    icon: <ShieldCheck className="w-6 h-6" />,
    image: "https://remodelmetoday.com/wp-content/uploads/2023/01/IMG_1743-1-scaled.jpg",
    colSpan: "md:col-span-1",
  },
  {
    title: "Free Estimates",
    description: "Transparent pricing and detailed project scopes before we start.",
    icon: <ArrowUpRight className="w-6 h-6" />,
    image: "https://remodelingmarketingteam.com/wp-content/uploads/2024/05/Navigating-Free-Estimates-in-Home-Remodeling.webp",
    colSpan: "md:col-span-2",
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 md:py-32 bg-black relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 md:mb-24 max-w-3xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-4xl md:text-6xl font-bold tracking-tight mb-6"
          >
            Our <span className="text-brand-gray">Expertise</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 text-lg md:text-xl font-light"
          >
            Specializing in premium siding installation and comprehensive exterior remodeling. We bring your vision to life with precision.
          </motion.p>
        </div>

        {/* Mobile: Horizontal Snap Carousel | Desktop: Bento Grid */}
        <div className="flex md:grid md:grid-cols-3 gap-6 overflow-x-auto md:overflow-visible snap-x snap-mandatory hide-scrollbar pb-8 md:pb-0 -mx-4 px-4 md:mx-0 md:px-0">
          {services.map((service, index) => (
            <TiltCard key={index} className={`relative group overflow-hidden rounded-3xl min-w-[85vw] sm:min-w-[60vw] md:min-w-0 snap-center h-[400px] md:h-[450px] ${service.colSpan} cursor-pointer`}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="w-full h-full relative"
              >
                {/* Background Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url(${service.image})` }}
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent transition-opacity duration-500 group-hover:opacity-80" />
                
                {/* Content */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end z-10">
                  <div className="w-12 h-12 rounded-full glass flex items-center justify-center text-white mb-6 group-hover:bg-brand-gray group-hover:text-black transition-colors duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 group-hover:text-glow transition-all">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 font-light leading-relaxed opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
}
