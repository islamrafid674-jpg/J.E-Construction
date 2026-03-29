/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Cursor } from "@/components/Cursor";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { TrustBanner } from "@/components/TrustBanner";
import { Services } from "@/components/Services";
import { ParallaxBreak } from "@/components/ParallaxBreak";
import { Gallery } from "@/components/Gallery";
import { Testimonials } from "@/components/Testimonials";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { MobileCTA } from "@/components/MobileCTA";

export default function App() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-brand-gray selection:text-white overflow-x-hidden">
      <Cursor />
      <Navbar />
      <Hero />
      <TrustBanner />
      <Services />
      <ParallaxBreak />
      <Gallery />
      <Testimonials />
      <Contact />
      <Footer />
      <MobileCTA />
    </main>
  );
}
