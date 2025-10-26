import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Users, Store } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className={`fixed top-0 left-0 right-0 z-50 transition-all ${scrolled ? 'backdrop-blur bg-white/80 shadow-sm' : 'bg-transparent'} `}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 shadow ring-1 ring-black/10 flex items-center justify-center">
            <Store className="h-5 w-5 text-white" />
          </div>
          <span className="font-bold text-lg">CropFresh</span>
        </div>
        <div className="hidden md:flex items-center gap-6 text-sm">
          <a href="#features" className="hover:text-green-700">Features</a>
          <a href="#how" className="hover:text-green-700">How It Works</a>
          <a href="#tech" className="hover:text-green-700">Technology</a>
          <a href="#contact" className="hover:text-green-700">Contact</a>
        </div>
        <div className="flex items-center gap-2">
          <a href="#cta" className="px-4 py-2 rounded-lg border border-green-600 text-green-700 hover:bg-green-50 text-sm">Join as Buyer</a>
          <a href="#cta" className="px-4 py-2 rounded-lg bg-green-600 text-white hover:bg-green-700 text-sm">Join as Farmer</a>
        </div>
      </nav>
    </div>
  );
};

const Hero = () => {
  return (
    <section className="pt-28 sm:pt-32 pb-12 sm:pb-20 bg-gradient-to-b from-green-50/80 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <h1 className="text-3xl sm:text-5xl font-extrabold leading-tight tracking-tight">
            Empowering Farmers, Connecting Markets
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-gray-700">
            India's first AI-powered agricultural marketplace eliminating middlemen.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#cta" className="px-5 py-3 rounded-xl bg-green-600 text-white hover:bg-green-700 shadow-sm">Join as Farmer</a>
            <a href="#cta" className="px-5 py-3 rounded-xl bg-white/70 backdrop-blur border border-gray-200 hover:border-green-300 text-green-700">Join as Buyer</a>
          </div>
          <div className="mt-6 flex items-center gap-3 text-sm text-gray-600">
            <Users className="h-4 w-4 text-green-600" />
            <span>Join 10,000+ farmers already registered</span>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}>
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-green-200/40 to-emerald-200/40 blur-2xl rounded-3xl"></div>
            <img
              alt="Farmer using smartphone"
              className="relative w-full rounded-3xl shadow-lg ring-1 ring-black/5 object-cover aspect-[4/3]"
              src="https://images.unsplash.com/photo-1594391277622-5f0066a17f68?q=80&w=1400&auto=format&fit=crop"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default function Header() {
  return (
    <header>
      <Navbar />
      <Hero />
    </header>
  );
}
