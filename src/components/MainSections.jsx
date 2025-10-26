import React, { useEffect, useMemo, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  BadgeCheck,
  Banknote,
  Brain,
  CheckCircle2,
  Layers,
  LineChart,
  Network,
  Smartphone,
  ShoppingCart,
  Truck,
  Users,
  Star,
  Play,
  Mail,
  Github,
  Linkedin,
  Twitter,
  Globe,
  ShieldCheck,
} from 'lucide-react'

function useCountUp(target, startWhenInView) {
  const [value, setValue] = useState(0)
  useEffect(() => {
    if (!startWhenInView) return
    let raf
    const duration = 1200
    const start = performance.now()
    const step = (now) => {
      const p = Math.min(1, (now - start) / duration)
      setValue(Math.floor(p * target))
      if (p < 1) raf = requestAnimationFrame(step)
    }
    raf = requestAnimationFrame(step)
    return () => cancelAnimationFrame(raf)
  }, [target, startWhenInView])
  return value
}

const StatCard = ({ label, value, suffix = '', delay = 0 }) => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-50px' })
  const numeric = typeof value === 'number' ? value : 0
  const count = useCountUp(numeric, inView)
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 10 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
      className="rounded-2xl bg-white/70 backdrop-blur border border-white/60 shadow-sm p-5 text-center"
    >
      <div className="text-3xl font-extrabold text-gray-900">
        {numeric ? (
          <span>
            {count.toLocaleString()}<span className="align-top text-xl">{suffix}</span>
          </span>
        ) : (
          <span>{value}</span>
        )}
      </div>
      <div className="mt-1 text-sm text-gray-600">{label}</div>
    </motion.div>
  )
}

const PainCard = ({ title }) => (
  <div className="rounded-2xl p-5 bg-gradient-to-br from-red-50 to-orange-50 border border-red-100 shadow-sm">
    <div className="text-base font-semibold text-red-700">{title}</div>
  </div>
)

const SolutionCard = ({ icon: Icon, title, desc }) => (
  <div className="rounded-2xl p-5 bg-white/70 backdrop-blur border border-white/60 shadow-sm">
    <div className="flex items-center gap-3">
      <div className="h-10 w-10 rounded-xl bg-green-100 text-green-700 grid place-items-center">
        <Icon size={20} />
      </div>
      <div className="font-semibold">{title}</div>
    </div>
    <p className="mt-2 text-sm text-gray-600">{desc}</p>
  </div>
)

const FeatureCard = ({ icon: Icon, title, desc }) => (
  <div className="rounded-2xl p-5 bg-white/70 backdrop-blur border border-white/60 shadow-sm">
    <div className="flex items-center gap-3">
      <div className="h-10 w-10 rounded-xl bg-emerald-100 text-emerald-700 grid place-items-center">
        <Icon size={20} />
      </div>
      <div className="font-semibold">{title}</div>
    </div>
    <p className="mt-2 text-sm text-gray-600">{desc}</p>
  </div>
)

const Step = ({ number, title, desc }) => (
  <div className="flex items-start gap-3">
    <div className="h-8 w-8 rounded-full bg-green-600 text-white grid place-items-center font-bold shadow">{number}</div>
    <div>
      <div className="font-semibold">{title}</div>
      <div className="text-sm text-gray-600">{desc}</div>
    </div>
  </div>
)

function DemoCarousel() {
  const slides = useMemo(
    () => [
      {
        src: 'https://images.unsplash.com/photo-1513815979957-5bef5d1f0a6b?q=80&w=1200&auto=format&fit=crop',
        caption: 'Mobile marketplace interface',
      },
      {
        src: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=1200&auto=format&fit=crop',
        caption: 'AI insights dashboard',
      },
      {
        src: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=1200&auto=format&fit=crop',
        caption: 'Logistics tracking in real-time',
      },
    ],
    []
  )
  const [index, setIndex] = useState(0)
  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % slides.length), 3500)
    return () => clearInterval(id)
  }, [slides.length])

  return (
    <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/50 bg-white/50 backdrop-blur">
      <img src={slides[index].src} alt={slides[index].caption} className="w-full h-72 object-cover" />
      <div className="absolute inset-x-0 bottom-0 p-3 text-white bg-gradient-to-t from-black/50 to-transparent text-sm">
        {slides[index].caption}
      </div>
      <button
        className="absolute right-3 top-3 inline-flex items-center gap-1 text-xs font-semibold px-3 py-1 rounded-full bg-green-600 text-white shadow"
        onClick={() => alert('Interactive demo coming soon!')}
      >
        <Play size={14} /> Interactive demo
      </button>
      <div className="absolute left-1/2 -translate-x-1/2 bottom-3 flex gap-1.5">
        {slides.map((_, i) => (
          <span key={i} className={`h-1.5 w-6 rounded-full ${i === index ? 'bg-white' : 'bg-white/50'}`} />
        ))}
      </div>
    </div>
  )
}

export default function MainSections() {
  return (
    <div className="space-y-20 sm:space-y-24">
      {/* Stats Banner */}
      <section aria-labelledby="stats" className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <StatCard label="Target Farmers" value={500000} suffix="+" />
          <StatCard label="Income Increase" value={35} suffix="%" delay={0.05} />
          <StatCard label="Target GMV" value={8400} suffix=" Cr" delay={0.1} />
          <StatCard label="Wastage Reduction" value={40} suffix="%" delay={0.15} />
        </div>
      </section>

      {/* Problem Statement */}
      <section aria-labelledby="problem" className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold" id="problem">The Agricultural Crisis</h2>
            <p className="mt-3 text-gray-600">Inefficiencies in the supply chain create enormous value loss for farmers and buyers alike.</p>
          </div>
          <div className="grid sm:grid-cols-3 gap-3">
            <PainCard title="Farmers lose 40-60% to middlemen" />
            <PainCard title="30-45 day payment delays" />
            <PainCard title="₹92,000 Cr produce wasted annually" />
          </div>
        </div>
      </section>

      {/* Solution Overview */}
      <section aria-labelledby="solution" className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 id="solution" className="text-2xl sm:text-3xl font-extrabold">How CropFresh Solves This</h2>
        <div className="mt-6 grid md:grid-cols-3 gap-4">
          <SolutionCard icon={ShoppingCart} title="Direct Marketplace" desc="Connect farmers and buyers directly to eliminate middlemen and boost margins." />
          <SolutionCard icon={Banknote} title="Instant Payments" desc="Same-day settlements via secure digital rails for reliable cash flow." />
          <SolutionCard icon={Brain} title="AI Quality Grading" desc="Objective grading and transparent pricing for trust and efficiency." />
        </div>
      </section>

      {/* Core Features */}
      <section id="features" aria-labelledby="features-title" className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 id="features-title" className="text-2xl sm:text-3xl font-extrabold">Core Features</h2>
        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <FeatureCard icon={LineChart} title="AI-Powered Price Discovery" desc="Live, data-driven price signals across regions and seasons." />
          <FeatureCard icon={BadgeCheck} title="Quality Grading System" desc="Computer vision grading for consistent, fair classification." />
          <FeatureCard icon={Banknote} title="Instant Payment Settlement" desc="Instant payouts with escrow-backed protection." />
          <FeatureCard icon={Truck} title="Smart Logistics Network" desc="Optimized routing and partnered fleets reduce spoilage." />
          <FeatureCard icon={Network} title="Real-time Market Intelligence" desc="Demand forecasting and buyer intent insights." />
          <FeatureCard icon={Layers} title="Contract Farming Support" desc="Smart contracts and agronomy support for predictability." />
        </div>
      </section>

      {/* How It Works */}
      <section id="how" className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-extrabold">How It Works</h2>
        <div className="mt-5 rounded-2xl border bg-white/60 backdrop-blur border-white/60 p-4">
          <Tabs />
        </div>
      </section>

      {/* Platform Demo Preview */}
      <section id="demo" className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold">Platform Demo Preview</h2>
            <p className="mt-3 text-gray-600">Explore our mobile and web experience designed for Bharat. See transparent pricing, order flows, and live logistics.</p>
            <div className="mt-5 flex gap-3">
              <a href="#demo" className="inline-flex items-center gap-2 rounded-lg bg-green-600 text-white px-4 py-2 font-semibold shadow hover:bg-green-700">
                <Play size={16} /> Watch Overview
              </a>
              <a href="#signup" className="inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2 font-semibold hover:bg-gray-50">
                Try Interactive Demo
              </a>
            </div>
          </div>
          <DemoCarousel />
        </div>
      </section>

      {/* Success Metrics */}
      <section id="metrics" className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-extrabold">Year 5 Projections</h2>
        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <MetricCard title="Revenue" value="₹420 Cr" accent="from-emerald-500 to-green-600" />
          <MetricCard title="Active Farmers" value="500K+" accent="from-sky-500 to-blue-600" />
          <MetricCard title="Active Buyers" value="25K+" accent="from-fuchsia-500 to-pink-600" />
          <MetricCard title="Monthly GMV" value="₹700 Cr" accent="from-amber-500 to-orange-600" />
        </div>
      </section>

      {/* Technology Stack */}
      <section id="tech" className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold">Powered by Advanced AI</h2>
            <p className="mt-3 text-gray-600">We combine machine learning, scalable cloud, blockchain-backed settlements, and a mobile-first architecture to deliver trust and speed at scale.</p>
            <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3">
              <TechPill icon={Brain} label="Machine Learning" />
              <TechPill icon={Globe} label="Cloud Infra" />
              <TechPill icon={ShieldCheck} label="Blockchain" />
              <TechPill icon={Smartphone} label="Mobile-First" />
            </div>
          </div>
          <div className="rounded-3xl border border-white/60 bg-white/60 backdrop-blur p-6 shadow-sm">
            <ul className="space-y-3 text-sm text-gray-700">
              <li className="flex items-center gap-2"><CheckCircle2 className="text-green-600" size={18}/> Vision models for grading and anomaly detection</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="text-green-600" size={18}/> Price discovery blending auctions and ML forecasting</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="text-green-600" size={18}/> Smart-contract escrow for settlement integrity</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="text-green-600" size={18}/> Offline-first app for low-connectivity zones</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-extrabold">What Our Users Say</h2>
        <div className="mt-6 grid md:grid-cols-3 gap-4">
          <TestimonialCard
            name="Ravi Kumar"
            role="Farmer, Maharashtra"
            quote="Income increased by 45% after joining CropFresh. Payments arrive the same day!"
            avatar="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=300&auto=format&fit=crop"
          />
          <TestimonialCard
            name="Priya Sharma"
            role="Buyer, Bengaluru"
            quote="Quality grading is transparent and reliable. Procurement is now predictable."
            avatar="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=300&auto=format&fit=crop"
          />
          <TestimonialCard
            name="Aman Singh"
            role="Farmer, Punjab"
            quote="No more middlemen cuts. Better prices and fast logistics to city buyers."
            avatar="https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?q=80&w=300&auto=format&fit=crop"
          />
        </div>
      </section>

      {/* Call To Action */}
      <section id="signup" className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl overflow-hidden relative p-8 sm:p-10 bg-gradient-to-br from-green-600 to-emerald-700 text-white">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=1200&auto=format&fit=crop')] opacity-10 bg-cover bg-center" />
          <div className="relative">
            <h2 className="text-2xl sm:text-3xl font-extrabold">Ready to Transform Agriculture?</h2>
            <p className="mt-2 text-white/90">Join 10,000+ farmers already registered</p>
            <form className="mt-6 grid sm:grid-cols-3 gap-3" onSubmit={(e)=>{e.preventDefault(); alert('Thanks! We\'ll be in touch soon.')}}>
              <input required type="email" placeholder="Your email address" className="sm:col-span-2 w-full px-4 py-3 rounded-lg text-gray-900 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-white/60" />
              <button type="submit" className="rounded-lg bg-white text-green-700 font-semibold px-5 py-3 hover:bg-white/90">Get Early Access</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}

function Tabs() {
  const [tab, setTab] = useState('farmers')
  return (
    <div>
      <div className="flex gap-2 p-1 bg-gray-100 rounded-xl inline-flex">
        <button
          onClick={() => setTab('farmers')}
          className={`px-4 py-2 rounded-lg text-sm font-semibold ${tab==='farmers'?'bg-white shadow':'text-gray-600 hover:text-gray-800'}`}
        >
          For Farmers
        </button>
        <button
          onClick={() => setTab('buyers')}
          className={`px-4 py-2 rounded-lg text-sm font-semibold ${tab==='buyers'?'bg-white shadow':'text-gray-600 hover:text-gray-800'}`}
        >
          For Buyers
        </button>
      </div>
      <div className="mt-5 grid md:grid-cols-2 gap-6">
        {tab === 'farmers' ? (
          <>
            <div className="space-y-4">
              <Step number={1} title="Register" desc="Sign up with KYC for secure onboarding." />
              <Step number={2} title="List Crop" desc="Upload produce details and AI-graded quality." />
              <Step number={3} title="Get Orders" desc="Receive direct orders from verified buyers." />
              <Step number={4} title="Instant Payment" desc="Funds settle same-day to your account." />
            </div>
            <div className="rounded-2xl overflow-hidden">
              <img className="w-full h-64 object-cover" src="https://images.unsplash.com/photo-1551281044-8b57cdf251b7?q=80&w=1200&auto=format&fit=crop" alt="Farmers app" />
            </div>
          </>
        ) : (
          <>
            <div className="space-y-4">
              <Step number={1} title="Register" desc="Verify business and procurement preferences." />
              <Step number={2} title="Browse Quality Produce" desc="Filter by grade, region, and price." />
              <Step number={3} title="Order" desc="Secure checkout with escrow-backed settlement." />
              <Step number={4} title="Track Delivery" desc="Live tracking with smart logistics." />
            </div>
            <div className="rounded-2xl overflow-hidden">
              <img className="w-full h-64 object-cover" src="https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1200&auto=format&fit=crop" alt="Buyer web app" />
            </div>
          </>
        )}
      </div>
    </div>
  )
}

function MetricCard({ title, value, accent }) {
  return (
    <div className="rounded-2xl p-5 bg-white/70 backdrop-blur border border-white/60 shadow-sm">
      <div className={`h-10 w-10 rounded-xl bg-gradient-to-br ${accent} text-white grid place-items-center font-bold`}>{value.replace(/[^0-9+]/g,'')? value[0]: '•'}</div>
      <div className="mt-3 text-sm text-gray-600">{title}</div>
      <div className="mt-1 text-2xl font-extrabold">{value}</div>
    </div>
  )
}

function TechPill({ icon: Icon, label }) {
  return (
    <div className="flex items-center gap-2 rounded-full border border-white/60 bg-white/60 backdrop-blur px-3 py-2 text-sm font-medium">
      <Icon size={16} className="text-green-700" /> {label}
    </div>
  )
}

function TestimonialCard({ name, role, quote, avatar }) {
  return (
    <div className="rounded-2xl p-5 bg-white/70 backdrop-blur border border-white/60 shadow-sm">
      <div className="flex items-center gap-3">
        <img src={avatar} alt={name} className="h-10 w-10 rounded-full object-cover" />
        <div>
          <div className="font-semibold">{name}</div>
          <div className="text-xs text-gray-500">{role}</div>
        </div>
      </div>
      <div className="mt-3 flex gap-1 text-amber-500">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} size={16} fill="#f59e0b" stroke="#f59e0b" />
        ))}
      </div>
      <p className="mt-2 text-sm text-gray-700">“{quote}”</p>
    </div>
  )
}
