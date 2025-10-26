import React, { useEffect, useState } from 'react';
import { Leaf, Menu, X } from 'lucide-react';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navItems = [
    { href: '#features', label: 'Features' },
    { href: '#how-it-works', label: 'How It Works' },
    { href: '#demo', label: 'Demo' },
    { href: '#tech', label: 'Technology' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all ${
      scrolled ? 'backdrop-blur bg-white/70 shadow-sm' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#top" className="flex items-center gap-2 font-semibold text-green-700">
            <span className="p-2 rounded-lg bg-green-100 text-green-600"><Leaf size={20} /></span>
            CropFresh
          </a>
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((n) => (
              <a key={n.href} href={n.href} className="text-sm font-medium text-gray-700 hover:text-green-700 transition-colors">
                {n.label}
              </a>
            ))}
            <a href="#cta" className="px-4 py-2 rounded-full bg-green-600 text-white text-sm font-semibold hover:bg-green-700 transition-colors">Get Early Access</a>
          </nav>
          <button onClick={() => setOpen(true)} className="md:hidden p-2 rounded-lg hover:bg-gray-100">
            <Menu />
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden fixed inset-0 z-50 bg-black/40" onClick={() => setOpen(false)}>
          <div className="absolute top-0 right-0 w-72 h-full bg-white shadow-xl p-6" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2 font-semibold text-green-700">
                <span className="p-2 rounded-lg bg-green-100 text-green-600"><Leaf size={20} /></span>
                CropFresh
              </div>
              <button onClick={() => setOpen(false)} className="p-2 rounded-lg hover:bg-gray-100"><X /></button>
            </div>
            <div className="flex flex-col gap-4">
              {navItems.map((n) => (
                <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="text-base font-medium text-gray-800">
                  {n.label}
                </a>
              ))}
              <a href="#cta" onClick={() => setOpen(false)} className="mt-2 inline-flex justify-center px-4 py-2 rounded-full bg-green-600 text-white text-sm font-semibold hover:bg-green-700">Get Early Access</a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
