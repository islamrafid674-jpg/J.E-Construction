import { Instagram, Facebook } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 pt-20 pb-10 md:pb-20 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-16">
          <div className="md:col-span-2">
            <a href="#" className="flex items-center gap-2 group mb-6 inline-flex">
              <img 
                src="https://i.imgur.com/ClccMDK.png" 
                alt="J.E Construction Logo" 
                className="h-24 md:h-32 w-auto object-contain"
                referrerPolicy="no-referrer"
              />
            </a>
            <p className="text-gray-400 font-light max-w-sm mb-8 leading-relaxed">
              Premium siding installation and exterior remodeling services. Transforming homes with quality craftsmanship and attention to detail.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-12 h-12 rounded-full glass flex items-center justify-center text-white hover:bg-brand-gray hover:text-black transition-all active:scale-95">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-12 h-12 rounded-full glass flex items-center justify-center text-white hover:bg-brand-gray hover:text-black transition-all active:scale-95">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6 uppercase tracking-widest text-sm">Quick Links</h4>
            <ul className="space-y-4">
              <li><a href="#services" className="text-gray-400 hover:text-brand-gray transition-colors">Services</a></li>
              <li><a href="#gallery" className="text-gray-400 hover:text-brand-gray transition-colors">Gallery</a></li>
              <li><a href="#testimonials" className="text-gray-400 hover:text-brand-gray transition-colors">Testimonials</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-brand-gray transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6 uppercase tracking-widest text-sm">Contact</h4>
            <ul className="space-y-4">
              <li><a href="tel:818791527" className="text-gray-400 hover:text-brand-gray transition-colors">818-791-527</a></li>
              <li><a href="mailto:professionalsiding09@gmail.com" className="text-gray-400 hover:text-brand-gray transition-colors break-all">professionalsiding09@gmail.com</a></li>
              <li className="text-gray-400">Free Estimates Available</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm text-center md:text-left">
            &copy; {new Date().getFullYear()} J.E Construction. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-500">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
