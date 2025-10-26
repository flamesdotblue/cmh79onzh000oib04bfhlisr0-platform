import React, { useState, useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { Play, Smartphone, Cloud, Atom, Shield } from 'lucide-react';

const Tabs = () => {
  const [tab, setTab] = useState('farmers');
  const stepsFarmers = ['Register', 'List Crop', 'Get Orders', 'Instant Payment'];
  const stepsBuyers = ['Register', 'Browse Quality Produce', 'Order', 'Track Delivery'];

  const Step = ({ text, index }) => (
    <div className="relative p-4 rounded-xl bg-white/70 border border-gray-100 shadow-sm flex items-center gap-3">
      <div className="h-7 w-7 rounded-full bg-green-600 text-white flex items-center justify-center text-sm font-bold">{index + 1}</div>
      <div className="font-medium">{text}</div>
    </div>
  );

  return (
    <div className="rounded-2xl p-2 bg-white/60 backdrop-blur border border-gray-100 shadow-sm">
      <div className="grid grid-cols-2 p-1 rounded-xl bg-gray-100">
        <button onClick={() => setTab('farmers')} className={`py-2 rounded-lg text-sm font-medium transition ${tab==='farmers' ? 'bg-white shadow text-green-700' : 'text-gray-600'}`}>For Farmers</button>
        <button onClick={() => setTab('buyers')} className={`py-2 rounded-lg text-sm font-medium transition ${tab==='buyers' ? 'bg-white shadow text-green-700' : 'text-gray-600'}`}>For Buyers</button>
      </div>
      <div className="mt-4 grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {(tab === 'farmers' ? stepsFarmers : stepsBuyers).map((s, i) => (
          <Step key={s} text={s} index={i} />
        ))}
      </div>
    </div>
  );
};

const Carousel = () => {
  const items = [
    'https://images.unsplash.com/photo-1540206276207-3af25c08abc4?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1500937386688-cbbff44d5d55?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1501820488136-72669149e0d4?q=80&w=1200&auto=format&fit=crop',
  ];
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % items.length), 3500);
    return () => clearInterval(t);
  }, []);
  return (
    <div className="relative overflow-hidden rounded-2xl ring-1 ring-black/5">
      <div className="flex transition-transform duration-700" style={{ transform: `translateX(-${index * 100}%)`, width: `${items.length * 100}%` }}>
        {items.map((src, i) => (
          <img key={i} src={src} alt="Platform preview" className="w-full object-cover aspect-[16/9]" />
        ))}
      </div>
      <button aria-label="prev" onClick={() => setIndex((i) => (i - 1 + items.length) % items.length)} className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow">‹</button>
      <button aria-label="next" onClick={() => setIndex((i) => (i + 1) % items.length)} className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow">›</button>
    </div>
  );
};

const SuccessMetrics = () => {
  const Metric = ({ label, value }) => {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true });
    const [val, setVal] = useState(0);
    useEffect(() => {
      if (!inView) return;
      const target = value;
      const startT = performance.now();
      const d = 1000;
      const tick = (now) => {
        const p = Math.min(1, (now - startT) / d);
        const eased = 1 - Math.pow(1 - p, 3);
        setVal(Math.round(target * eased));
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    }, [inView, value]);
    return (
      <div ref={ref} className="p-5 rounded-2xl bg-white/70 backdrop-blur border border-gray-100 shadow-sm text-center">
        <div className="text-2xl font-extrabold text-emerald-700">{val.toLocaleString()}</div>
        <div className="mt-1 text-sm text-gray-600">{label}</div>
      </div>
    );
  };

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
      <Metric label="Revenue (Year 5) ₹ Cr" value={420} />
      <Metric label="Active Farmers" value={500000} />
      <Metric label="Active Buyers" value={25000} />
      <Metric label="Monthly GMV ₹ Cr" value={700} />
    </div>
  );
};

const Tech = () => (
  <div id="tech" className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
    {[{i:Atom,t:'Machine Learning',d:'Computer vision grading and demand forecasting.'},
      {i:Cloud,t:'Cloud Infrastructure',d:'Scalable microservices on resilient cloud.'},
      {i:Shield,t:'Blockchain',d:'Immutable settlements and audit trails.'},
      {i:Smartphone,t:'Mobile-First',d:'Seamless apps for low-bandwidth conditions.'}].map((x)=> (
      <div key={x.t} className="p-5 rounded-2xl bg-white/70 backdrop-blur border border-gray-100 shadow-sm">
        <div className="h-11 w-11 rounded-xl bg-indigo-600/10 text-indigo-700 flex items-center justify-center">
          <x.i className="h-5 w-5" />
        </div>
        <div className="mt-3 font-semibold">{x.t}</div>
        <p className="text-sm text-gray-600 mt-1">{x.d}</p>
      </div>
    ))}
  </div>
);

export default function FlowAndDemo() {
  return (
    <section id="how" className="py-12 sm:py-16 bg-gradient-to-b from-white to-green-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-2xl sm:text-3xl font-bold">How It Works</motion.h2>
        <div className="mt-6">
          <Tabs />
        </div>

        <div className="mt-12 grid lg:grid-cols-2 gap-8 items-start">
          <div>
            <motion.h3 initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-xl font-semibold">Platform Demo Preview</motion.h3>
            <div className="mt-4">
              <Carousel />
              <div className="mt-4 flex items-center gap-3">
                <a href="#cta" className="px-4 py-2 rounded-lg bg-green-600 text-white hover:bg-green-700 inline-flex items-center gap-2"><Play className="h-4 w-4" /> Interactive Demo</a>
                <span className="text-sm text-gray-600">Available on Web and Mobile</span>
              </div>
            </div>
          </div>
          <div>
            <motion.h3 initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-xl font-semibold">Success Metrics (Year 5 projections)</motion.h3>
            <div className="mt-4">
              <SuccessMetrics />
            </div>
            <div className="mt-10">
              <h3 className="text-xl font-semibold">Powered by Advanced AI</h3>
              <p className="text-sm text-gray-600 mt-1">A secure, scalable stack for India-scale agriculture.</p>
              <div className="mt-4">
                <Tech />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
