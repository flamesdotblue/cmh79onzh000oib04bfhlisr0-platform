import React from 'react';
import { motion } from 'framer-motion';
import { Star, Users } from 'lucide-react';

const Testimonials = () => {
  const items = [
    { name: 'Ravi Kumar, Farmer - Nashik', img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=300&auto=format&fit=crop', text: 'Income increased by 45% with instant payments and better prices.' },
    { name: 'Shalini Devi, Farmer - Punjab', img: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=300&auto=format&fit=crop', text: 'No more long waits. Payments arrive the same day of delivery.' },
    { name: 'Arjun Mehta, Buyer - Bengaluru', img: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=300&auto=format&fit=crop', text: 'Consistent quality with transparent grading. Logistics are smooth.' },
  ];
  return (
    <section className="py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-2xl sm:text-3xl font-bold">What Users Say</motion.h2>
        <div className="mt-6 grid md:grid-cols-3 gap-5">
          {items.map((t, i) => (
            <motion.div key={t.name} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="p-6 rounded-2xl bg-white/70 backdrop-blur border border-gray-100 shadow-sm">
              <div className="flex items-center gap-3">
                <img src={t.img} alt={t.name} className="h-12 w-12 rounded-full object-cover" />
                <div className="font-medium text-sm">{t.name}</div>
              </div>
              <div className="mt-3 text-sm text-gray-700">“{t.text}”</div>
              <div className="mt-3 flex text-yellow-500" aria-label="5 star rating">
                {[...Array(5)].map((_, idx) => <Star key={idx} className="h-4 w-4 fill-yellow-400 stroke-yellow-500" />)}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CTA = () => {
  return (
    <section id="cta" className="py-12 sm:py-16 bg-gradient-to-br from-green-600 to-emerald-600 text-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl sm:text-3xl font-extrabold">Ready to Transform Agriculture?</h2>
        <p className="mt-2 text-white/90">Join the movement to empower farmers and deliver fresher produce to markets.</p>
        <form className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
          <input required type="email" placeholder="Enter your email" className="w-full sm:w-96 px-4 py-3 rounded-xl text-gray-900 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-white/60" />
          <button type="submit" className="px-5 py-3 rounded-xl bg-white text-green-700 font-medium hover:bg-green-50">Get Early Access</button>
        </form>
        <div className="mt-4 flex items-center justify-center gap-2 text-sm text-white/90">
          <Users className="h-4 w-4" />
          <span>Join 10,000+ farmers already registered</span>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer id="contact" className="py-10 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="font-bold text-lg">CropFresh</div>
            <p className="text-sm text-gray-600 mt-2">AI-powered agricultural marketplace connecting farmers and buyers directly.</p>
          </div>
          <div>
            <div className="font-semibold">Company</div>
            <ul className="mt-2 space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-green-700">About</a></li>
              <li><a href="#features" className="hover:text-green-700">Features</a></li>
              <li><a href="#how" className="hover:text-green-700">How It Works</a></li>
              <li><a href="#contact" className="hover:text-green-700">Contact</a></li>
            </ul>
          </div>
          <div>
            <div className="font-semibold">Legal</div>
            <ul className="mt-2 space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-green-700">Privacy</a></li>
              <li><a href="#" className="hover:text-green-700">Terms</a></li>
            </ul>
          </div>
          <div>
            <div className="font-semibold">Stay Updated</div>
            <form className="mt-2 flex gap-2">
              <input type="email" placeholder="Email address" className="w-full px-3 py-2 rounded-lg border border-gray-200" />
              <button className="px-3 py-2 rounded-lg bg-green-600 text-white hover:bg-green-700">Subscribe</button>
            </form>
            <div className="mt-3 flex gap-3 text-gray-500">
              <a href="#" aria-label="Twitter" className="hover:text-green-700">Twitter</a>
              <a href="#" aria-label="LinkedIn" className="hover:text-green-700">LinkedIn</a>
              <a href="#" aria-label="Instagram" className="hover:text-green-700">Instagram</a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-xs text-gray-500">© {new Date().getFullYear()} CropFresh. All rights reserved.</div>
      </div>
    </footer>
  );
};

export default function SocialAndFooter() {
  return (
    <div>
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
}
