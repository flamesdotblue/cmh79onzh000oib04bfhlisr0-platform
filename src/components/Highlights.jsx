import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Brain, Zap, Store, IndianRupee, Truck, BarChart2 } from 'lucide-react';

const AnimatedCounter = ({ to, suffix = '', prefix = '', duration = 1200 }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const startTime = performance.now();
    const animate = (now) => {
      const p = Math.min(1, (now - startTime) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      const current = Math.round(start + (to - start) * eased);
      setVal(current);
      if (p < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [inView, to, duration]);

  return (
    <div ref={ref}>{prefix}{val.toLocaleString()} {suffix}</div>
  );
};

const StatCard = ({ label, value, suffix = '', prefix = '' }) => (
  <div className="p-5 rounded-2xl bg-white/70 backdrop-blur border border-gray-100 shadow-sm text-center">
    <div className="text-3xl font-extrabold text-green-700"><AnimatedCounter to={value} prefix={prefix} suffix={suffix} /></div>
    <div className="mt-1 text-sm text-gray-600">{label}</div>
  </div>
);

const StatsBanner = () => (
  <section className="py-8">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
      <StatCard label="Target Farmers" value={500000} suffix="+" />
      <StatCard label="Income Increase" value={35} suffix="%" />
      <StatCard label="Target GMV" value={8400} prefix="₹" suffix=" Cr" />
      <StatCard label="Wastage Reduction" value={40} suffix="%" />
    </div>
  </section>
);

const Problem = () => (
  <section className="py-12 sm:py-16" id="problem">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.h2 initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-2xl sm:text-3xl font-bold">The Agricultural Crisis</motion.h2>
      <div className="mt-6 grid md:grid-cols-3 gap-5">
        {[
          { t: 'Farmers lose 40-60% to middlemen', c: 'Opaque pricing and multiple intermediaries cut deep into farmer incomes.' },
          { t: '30-45 day payment delays', c: 'Working capital locked up, forcing distress sales and credit cycles.' },
          { t: '₹92,000 Cr produce wasted annually', c: 'Inefficient logistics and lack of demand visibility create wastage.' },
        ].map((item, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
            className="p-6 rounded-2xl bg-gradient-to-br from-red-50 to-orange-50 border border-orange-200/60 shadow-sm">
            <div className="text-lg font-semibold text-red-700">{item.t}</div>
            <p className="mt-2 text-sm text-orange-900/80">{item.c}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const Solution = () => (
  <section className="py-12 sm:py-16" id="solution">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.h2 initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-2xl sm:text-3xl font-bold">How CropFresh Solves This</motion.h2>
      <div className="mt-6 grid md:grid-cols-3 gap-5">
        {[
          { icon: Store, t: 'Direct Marketplace', d: 'Eliminate middlemen with farmer-to-buyer transactions.' },
          { icon: Zap, t: 'Instant Payments', d: 'Same-day settlements accelerate farmer cash flows.' },
          { icon: Brain, t: 'AI Quality Grading', d: 'Objective grading enables transparent pricing.' },
        ].map((s, i) => (
          <motion.div key={s.t} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
            className="p-6 rounded-2xl bg-white/70 backdrop-blur border border-gray-100 shadow-sm">
            <div className="h-11 w-11 rounded-xl bg-green-600/10 text-green-700 flex items-center justify-center">
              <s.icon className="h-5 w-5" />
            </div>
            <div className="mt-3 font-semibold">{s.t}</div>
            <p className="text-sm text-gray-600 mt-1">{s.d}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const Features = () => (
  <section className="py-12 sm:py-16" id="features">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.h2 initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-2xl sm:text-3xl font-bold">Core Features</motion.h2>
      <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {[
          { icon: IndianRupee, t: 'AI-Powered Price Discovery', d: 'Dynamic prices from real-time market data and quality grades.' },
          { icon: Brain, t: 'Quality Grading System', d: 'Computer vision grades produce for fair, transparent pricing.' },
          { icon: Zap, t: 'Instant Payment Settlement', d: 'Same-day, secure payouts to farmer wallets and bank accounts.' },
          { icon: Truck, t: 'Smart Logistics Network', d: 'Optimized routing with cold-chain partners to reduce wastage.' },
          { icon: BarChart2, t: 'Real-time Market Intelligence', d: 'Demand forecasting and price trends for smarter decisions.' },
          { icon: Store, t: 'Contract Farming Support', d: 'Assured off-take with digital contracts and compliance tracking.' },
        ].map((f, i) => (
          <motion.div key={f.t} initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.04 }}
            className="p-6 rounded-2xl bg-white/70 backdrop-blur border border-gray-100 shadow-sm">
            <div className="h-11 w-11 rounded-xl bg-emerald-600/10 text-emerald-700 flex items-center justify-center">
              <f.icon className="h-5 w-5" />
            </div>
            <div className="mt-3 font-semibold">{f.t}</div>
            <p className="text-sm text-gray-600 mt-1">{f.d}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default function Highlights() {
  return (
    <div>
      <StatsBanner />
      <Problem />
      <Solution />
      <Features />
    </div>
  );
}
