import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="top" className="pt-28 md:pt-32 pb-12 md:pb-20 relative overflow-hidden">
      <div className="absolute -top-24 -right-24 w-80 h-80 bg-green-200/50 rounded-full blur-3xl" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-emerald-200/50 rounded-full blur-3xl" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 items-center">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <span className="inline-flex items-center text-xs font-semibold uppercase tracking-wider text-green-700 bg-green-100 rounded-full px-3 py-1">AI-powered Marketplace</span>
          <h1 className="mt-4 text-3xl md:text-5xl font-extrabold leading-tight text-gray-900">
            Empowering Farmers, Connecting Markets
          </h1>
          <p className="mt-4 text-base md:text-lg text-gray-700 max-w-2xl">
            India's first AI-powered agricultural marketplace eliminating middlemen. Fair prices, instant payments, and smart logistics for a resilient supply chain.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#cta" className="px-6 py-3 rounded-full bg-green-600 text-white font-semibold shadow hover:bg-green-700 transition">Join as Farmer</a>
            <a href="#cta" className="px-6 py-3 rounded-full border border-green-600 text-green-700 font-semibold hover:bg-green-50 transition">Join as Buyer</a>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="relative">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/40 bg-white/60 backdrop-blur">
            <img 
              src="https://images.unsplash.com/photo-1592982537447-7440770cbfcf?q=80&w=1600&auto=format&fit=crop"
              alt="Farmer using smartphone"
              className="w-full h-[320px] md:h-[420px] object-cover"
              loading="eager"
            />
            <div className="absolute bottom-4 left-4 right-4 bg-white/80 backdrop-blur rounded-xl p-4 shadow">
              <p className="text-sm text-gray-700"><span className="font-semibold">Real-time Pricing</span> and <span className="font-semibold">Instant Payments</span> powered by AI</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
