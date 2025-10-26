import React, { useEffect, useState } from 'react'
import { Rocket, Leaf, Menu, X } from 'lucide-react'

const NavLink = ({ href, children, onClick }) => (
  <a
    href={href}
    onClick={onClick}
    className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-green-700 hover:underline underline-offset-4"
  >
    {children}
  </a>
)

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all ${
        scrolled
          ? 'backdrop-blur bg-white/80 shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 py-3">
        <a href="#" className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 grid place-items-center text-white shadow">
            <Leaf size={20} />
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-lg font-bold">CropFresh</span>
            <span className="text-[11px] text-gray-500 -mt-0.5">AI Agricultural Marketplace</span>
          </div>
        </a>

        <div className="hidden md:flex items-center gap-1">
          <NavLink href="#features">Features</NavLink>
          <NavLink href="#how">How It Works</NavLink>
          <NavLink href="#demo">Demo</NavLink>
          <NavLink href="#metrics">Metrics</NavLink>
          <NavLink href="#tech">Tech</NavLink>
          <NavLink href="#testimonials">Testimonials</NavLink>
          <a
            href="#signup"
            className="ml-2 inline-flex items-center gap-2 rounded-lg bg-green-600 text-white px-4 py-2 text-sm font-semibold shadow hover:bg-green-700"
          >
            <Rocket size={16} /> Get Early Access
          </a>
        </div>

        <button
          className="md:hidden p-2 rounded-lg hover:bg-gray-100"
          onClick={() => setOpen(!open)}
          aria-label="Toggle Menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t bg-white/95 backdrop-blur">
          <div className="px-4 py-3 flex flex-col">
            <NavLink onClick={() => setOpen(false)} href="#features">Features</NavLink>
            <NavLink onClick={() => setOpen(false)} href="#how">How It Works</NavLink>
            <NavLink onClick={() => setOpen(false)} href="#demo">Demo</NavLink>
            <NavLink onClick={() => setOpen(false)} href="#metrics">Metrics</NavLink>
            <NavLink onClick={() => setOpen(false)} href="#tech">Tech</NavLink>
            <NavLink onClick={() => setOpen(false)} href="#testimonials">Testimonials</NavLink>
            <a
              href="#signup"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-lg bg-green-600 text-white px-4 py-2 text-sm font-semibold shadow hover:bg-green-700"
            >
              <Rocket size={16} /> Get Early Access
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
