import React, { useEffect, useMemo, useRef, useState } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { Activity, BadgeCheck, Cloud, Cpu, FileCheck, Shield, Smartphone, Star, TrendingUp, Truck, Zap } from 'lucide-react';

const useCountUp = (end, startWhenInView = true, duration = 1200) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '0px 0px -20% 0px' });
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!startWhenInView || isInView) {
      let start = 0;
      const startTime = performance.now();
      const step = (now) => {
        const p = Math.min(1, (now - startTime) / duration);
        const eased = p < 0.5 ? 2 * p * p : -1 + (4 - 2 * p) * p; // easeInOutQuad
        const val = Math.round(start + (end - start) * eased);
        setValue(val);
        if (p < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    }
  }, [end, startWhenInView, isInView, duration]);
  return { ref, value };
};

const Stat = ({ label, value, suffix = '', prefix = '' }) => {
  const { ref, value: v } = useCountUp(value);
  return (
    <div ref={ref} className="text-center p-4 rounded-2xl bg-white/60 backdrop-blur border border-white/40 shadow">
      <div className="text-2xl md:text-3xl font-extrabold text-gray-900">
        {prefix}{v.toLocaleString()} {suffix}
      </div>
      <div className="mt-1 text-sm text-gray-600">{label}</div>
    </div>
  );
};

const StatsBanner = () => (
  <section className="py-8 md:py-12">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-4">
      <Stat label="Target Farmers" value={500000} suffix="+" />
      <Stat label="Income Increase" value={35} suffix="%" />
      <Stat label="Target GMV" value={8400} prefix="₹" suffix=" Cr" />
      <Stat label="Wastage Reduction" value={40} suffix="%" />
    </div>
  </section>
);

const Problem = () => (
  <section className="py-14 md:py-20 bg-gradient-to-b from-white to-orange-50" id="problem">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.h2 initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-2xl md:text-3xl font-extrabold text-gray-900">
        The Agricultural Crisis
      </motion.h2>
      <div className="mt-8 grid md:grid-cols-3 gap-6">
        {[
          { title: 'Farmers lose 40-60% to middlemen', color: 'from-red-500 to-orange-500' },
          { title: '30-45 day payment delays', color: 'from-orange-500 to-amber-500' },
          { title: '₹92,000 Cr produce wasted annually', color: 'from-rose-500 to-red-500' },
        ].map((c, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
            className="relative rounded-2xl overflow-hidden shadow-lg">
            <div className={`absolute inset-0 bg-gradient-to-r ${c.color} opacity-90`} />
            <div className="relative p-6 min-h-[140px] flex items-center">
              <h3 className="text-white text-lg font-bold">{c.title}</h3>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const Solution = () => (
  <section className="py-14 md:py-20" id="solution">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.h2 initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-2xl md:text-3xl font-extrabold text-gray-900">
        How CropFresh Solves This
      </motion.h2>
      <div className="mt-8 grid md:grid-cols-3 gap-6">
        {[
          { title: 'Direct Marketplace', desc: 'Connect farmers and buyers directly to eliminate middlemen.', icon: <TrendingUp className="text-green-600" /> },
          { title: 'Instant Payments', desc: 'Same-day settlements to improve cash flow and trust.', icon: <Zap className="text-green-600" /> },
          { title: 'AI Quality Grading', desc: 'Transparent pricing with AI-driven quality assessment.', icon: <BadgeCheck className="text-green-600" /> },
        ].map((c, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="rounded-2xl p-6 bg-white/70 backdrop-blur border border-white/40 shadow hover:shadow-md transition">
            <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center">{c.icon}</div>
            <h3 className="mt-4 font-bold text-lg">{c.title}</h3>
            <p className="mt-1 text-gray-600 text-sm">{c.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const Features = () => (
  <section className="py-14 md:py-20" id="features">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.h2 initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-2xl md:text-3xl font-extrabold text-gray-900">
        Core Features
      </motion.h2>
      <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          { title: 'AI-Powered Price Discovery', icon: <Activity className="text-green-600" /> },
          { title: 'Quality Grading System', icon: <BadgeCheck className="text-green-600" /> },
          { title: 'Instant Payment Settlement', icon: <Zap className="text-green-600" /> },
          { title: 'Smart Logistics Network', icon: <Truck className="text-green-600" /> },
          { title: 'Real-time Market Intelligence', icon: <TrendingUp className="text-green-600" /> },
          { title: 'Contract Farming Support', icon: <FileCheck className="text-green-600" /> },
        ].map((f, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
            className="p-5 rounded-2xl bg-white/70 border border-white/40 shadow hover:shadow-md transition">
            <div className="w-10 h-10 rounded-lg bg-green-50 flex items-center justify-center">{f.icon}</div>
            <h3 className="mt-3 font-semibold">{f.title}</h3>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const HowItWorks = () => {
  const [tab, setTab] = useState('farmers');
  const steps = useMemo(() => ({
    farmers: ['Register', 'List Crop', 'Get Orders', 'Instant Payment'],
    buyers: ['Register', 'Browse Quality Produce', 'Order', 'Track Delivery'],
  }), []);
  return (
    <section className="py-14 md:py-20" id="how-it-works">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900">How It Works</h2>
        <div className="mt-6 inline-flex rounded-full p-1 bg-gray-100">
          <button onClick={() => setTab('farmers')} className={`px-4 py-2 rounded-full text-sm font-semibold transition ${tab==='farmers' ? 'bg-white shadow text-green-700' : 'text-gray-700'}`}>For Farmers</button>
          <button onClick={() => setTab('buyers')} className={`px-4 py-2 rounded-full text-sm font-semibold transition ${tab==='buyers' ? 'bg-white shadow text-green-700' : 'text-gray-700'}`}>For Buyers</button>
        </div>
        <div className="mt-8 grid md:grid-cols-2 gap-8 items-center">
          <div className="grid grid-cols-2 gap-4">
            {steps[tab].map((s, i) => (
              <motion.div key={s} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
                className="p-5 rounded-2xl bg-white/70 border border-white/40 shadow">
                <div className="w-8 h-8 flex items-center justify-center rounded-full bg-green-600 text-white text-sm font-bold">{i+1}</div>
                <div className="mt-3 font-semibold">{s}</div>
                <p className="text-sm text-gray-600 mt-1">{tab==='farmers' ?
                  ['Create your profile in minutes','Upload crop details and quality','Receive verified orders','Same-day payment settlement'][i] :
                  ['Sign up and verify business','Browse graded produce with prices','Place secure orders','Track logistics in real time'][i]
                }</p>
              </motion.div>
            ))}
          </div>
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/40 bg-white/60 backdrop-blur">
            <img src={tab==='farmers' ? 'https://images.unsplash.com/photo-1526313199968-70e399ffe597?q=80&w=1600&auto=format&fit=crop' : 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=1600&auto=format&fit=crop'} alt="workflow" className="w-full h-[320px] object-cover" loading="lazy" />
          </div>
        </div>
      </div>
    </section>
  );
};

const Demo = () => {
  const images = [
    'https://images.unsplash.com/photo-1604328704033-51d11e3e5d20?q=80&w=1600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1555421689-43cad7100751?q=80&w=1600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1545665277-5937489579d1?q=80&w=1600&auto=format&fit=crop',
  ];
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIdx((p) => (p + 1) % images.length), 4000);
    return () => clearInterval(t);
  }, [images.length]);
  return (
    <section className="py-14 md:py-20" id="demo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900">Platform Demo</h2>
        <p className="mt-2 text-gray-600">Mobile and web interfaces designed for simplicity and speed.</p>
        <div className="mt-6 grid lg:grid-cols-2 gap-8 items-center">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/40 bg-white/60 backdrop-blur">
            <img src={images[idx]} alt="app preview" className="w-full h-[360px] object-cover" loading="lazy" />
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/20 via-transparent to-transparent" />
          </div>
          <div>
            <ul className="space-y-3 text-gray-700">
              <li>• AI-assisted listing and pricing</li>
              <li>• Secure checkout and instant settlements</li>
              <li>• Live logistics tracking</li>
              <li>• Multilingual mobile-first UI</li>
            </ul>
            <a href="#cta" className="mt-4 inline-flex px-5 py-3 rounded-full bg-green-600 text-white font-semibold shadow hover:bg-green-700">Launch Interactive Demo</a>
          </div>
        </div>
      </div>
    </section>
  );
};

const SuccessMetrics = () => (
  <section className="py-14 md:py-20" id="metrics">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900">Year 5 Projections</h2>
      <div className="mt-8 grid md:grid-cols-4 gap-6">
        <div className="p-6 rounded-2xl bg-white/70 border border-white/40 shadow">
          <div className="text-gray-500 text-sm">Revenue</div>
          <div className="text-2xl font-extrabold">₹420 Cr</div>
        </div>
        <div className="p-6 rounded-2xl bg-white/70 border border-white/40 shadow">
          <div className="text-gray-500 text-sm">Active Farmers</div>
          <div className="text-2xl font-extrabold">500K+</div>
        </div>
        <div className="p-6 rounded-2xl bg-white/70 border border-white/40 shadow">
          <div className="text-gray-500 text-sm">Active Buyers</div>
          <div className="text-2xl font-extrabold">25K+</div>
        </div>
        <div className="p-6 rounded-2xl bg-white/70 border border-white/40 shadow">
          <div className="text-gray-500 text-sm">Monthly GMV</div>
          <div className="text-2xl font-extrabold">₹700 Cr</div>
        </div>
      </div>
    </div>
  </section>
);

const Tech = () => (
  <section className="py-14 md:py-20" id="tech">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900">Powered by Advanced AI</h2>
      <p className="mt-2 text-gray-600 max-w-2xl">CropFresh leverages machine learning for price discovery and quality grading, secure cloud for scale, blockchain-backed settlements for integrity, and a mobile-first architecture for accessibility.</p>
      <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { icon: <Cpu className="text-green-600" />, title: 'Machine Learning' },
          { icon: <Cloud className="text-green-600" />, title: 'Cloud Infrastructure' },
          { icon: <Shield className="text-green-600" />, title: 'Blockchain' },
          { icon: <Smartphone className="text-green-600" />, title: 'Mobile-First' },
        ].map((t) => (
          <div key={t.title} className="p-6 rounded-2xl bg-white/70 border border-white/40 shadow flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center">{t.icon}</div>
            <div className="font-semibold">{t.title}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Testimonials = () => (
  <section className="py-14 md:py-20" id="testimonials">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900">What Our Users Say</h2>
      <div className="mt-8 grid md:grid-cols-3 gap-6">
        {[
          { name: 'Ravi, Farmer', quote: 'CropFresh increased my income by 45%. Payments are instant and transparent.', img: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&w=800&auto=format&fit=crop' },
          { name: 'Anita, Buyer', quote: 'Quality grading and on-time delivery made procurement effortless.', img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop' },
          { name: 'Suresh, Farmer', quote: 'No middlemen. Better prices and quick settlements.', img: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=800&auto=format&fit=crop' },
        ].map((t, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="p-6 rounded-2xl bg-white/70 border border-white/40 shadow">
            <div className="flex items-center gap-3">
              <img src={t.img} alt={t.name} className="w-12 h-12 rounded-full object-cover" loading="lazy" />
              <div>
                <div className="font-semibold">{t.name}</div>
                <div className="flex text-yellow-500">
                  {[...Array(5)].map((_, i) => (<Star key={i} size={16} fill="#facc15" className="text-yellow-500" />))}
                </div>
              </div>
            </div>
            <p className="mt-3 text-gray-700 text-sm">“{t.quote}”</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const CTA = () => (
  <section id="cta" className="py-16 md:py-24 relative">
    <div className="absolute inset-0 -z-10 bg-gradient-to-r from-green-600 to-emerald-600" />
    <div className="max-w-3xl mx-auto px-4 text-center text-white">
      <h2 className="text-3xl md:text-4xl font-extrabold">Ready to Transform Agriculture?</h2>
      <p className="mt-3 text-white/90">Join 10,000+ farmers already registered. Get early access and product updates.</p>
      <form className="mt-6 flex flex-col sm:flex-row gap-3 justify-center" onSubmit={(e)=>e.preventDefault()}>
        <input type="email" required placeholder="Enter your email" className="w-full sm:w-2/3 px-4 py-3 rounded-full bg-white text-gray-900 placeholder-gray-500 focus:outline-none" />
        <button className="px-6 py-3 rounded-full bg-black/20 border border-white/30 hover:bg-black/30 font-semibold">Notify Me</button>
      </form>
    </div>
  </section>
);

const FooterLinks = () => (
  <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 text-sm">
    <div>
      <div className="font-semibold mb-2">Company</div>
      <ul className="space-y-1 text-gray-600">
        <li><a href="#about" className="hover:text-green-700">About</a></li>
        <li><a href="#features" className="hover:text-green-700">Features</a></li>
        <li><a href="#how-it-works" className="hover:text-green-700">How It Works</a></li>
      </ul>
    </div>
    <div>
      <div className="font-semibold mb-2">Resources</div>
      <ul className="space-y-1 text-gray-600">
        <li><a href="#demo" className="hover:text-green-700">Demo</a></li>
        <li><a href="#tech" className="hover:text-green-700">Technology</a></li>
      </ul>
    </div>
    <div>
      <div className="font-semibold mb-2">Legal</div>
      <ul className="space-y-1 text-gray-600">
        <li><a href="#privacy" className="hover:text-green-700">Privacy</a></li>
        <li><a href="#terms" className="hover:text-green-700">Terms</a></li>
      </ul>
    </div>
    <div id="contact">
      <div className="font-semibold mb-2">Contact</div>
      <ul className="space-y-1 text-gray-600">
        <li>Email: hello@cropfresh.in</li>
        <li>Phone: +91-80000-00000</li>
      </ul>
    </div>
  </div>
);

const MainSections = () => {
  return (
    <main>
      <StatsBanner />
      <Problem />
      <Solution />
      <Features />
      <HowItWorks />
      <Demo />
      <SuccessMetrics />
      <Tech />
      <Testimonials />
      <CTA />
      <section className="py-12" aria-hidden>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><FooterLinks /></div>
      </section>
    </main>
  );
};

export default MainSections;
