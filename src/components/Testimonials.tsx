import { motion } from "motion/react";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Jenkins",
    role: "Homeowner",
    text: "J.E Construction completely transformed our home's exterior. The fiber cement siding looks incredible, and their attention to detail was unmatched. Highly recommend!",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Property Manager",
    text: "Professional, timely, and top-tier craftsmanship. They provided a free estimate that was accurate, and the final result exceeded our expectations.",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    role: "Homeowner",
    text: "The team was respectful of our property and worked efficiently. The new siding has completely updated the look of our 20-year-old house.",
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 md:py-32 bg-black relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-gray/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 md:mb-24 max-w-3xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-4xl md:text-6xl font-bold tracking-tight mb-6"
          >
            Client <span className="text-brand-gray">Stories</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 text-lg md:text-xl font-light"
          >
            Don't just take our word for it. Hear from the homeowners we've worked with.
          </motion.p>
        </div>

        {/* Mobile: Horizontal Snap Carousel | Desktop: Grid */}
        <div className="flex md:grid md:grid-cols-3 gap-6 overflow-x-auto md:overflow-visible snap-x snap-mandatory hide-scrollbar pb-8 md:pb-0 -mx-4 px-4 md:mx-0 md:px-0">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="glass-card p-8 md:p-10 rounded-3xl min-w-[85vw] sm:min-w-[60vw] md:min-w-0 snap-center flex flex-col relative group hover:border-brand-gray/50 transition-colors"
            >
              <Quote className="absolute top-8 right-8 w-12 h-12 text-white/5 group-hover:text-brand-gray/10 transition-colors" />
              
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-brand-gray text-brand-gray" />
                ))}
              </div>
              
              <p className="text-gray-300 text-lg leading-relaxed mb-8 flex-1 font-light">
                "{testimonial.text}"
              </p>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gray-800 to-black border border-white/10 flex items-center justify-center text-white font-bold">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="text-white font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
