import React from 'react'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative pt-28 sm:pt-32 lg:pt-36 pb-8 sm:pb-16">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-green-50 via-white to-white" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className=""
        >
          <span className="inline-block text-xs font-semibold tracking-wider uppercase text-green-700 bg-green-100 rounded-full px-3 py-1 mb-4">
            India's first AI-powered agri marketplace
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold leading-tight">
            Empowering Farmers, Connecting Markets
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-xl">
            India's first AI-powered agricultural marketplace eliminating middlemen. Fair prices, instant payments, and efficient logistics for every harvest.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#signup" className="inline-flex items-center justify-center rounded-lg bg-green-600 text-white px-5 py-3 font-semibold shadow hover:bg-green-700">
              Join as Farmer
            </a>
            <a href="#signup" className="inline-flex items-center justify-center rounded-lg border border-gray-300 bg-white text-gray-800 px-5 py-3 font-semibold hover:bg-gray-50">
              Join as Buyer
            </a>
          </div>
          <div className="mt-6 flex items-center gap-4 text-sm text-gray-500">
            <div className="h-8 w-8 rounded-full bg-white shadow ring-1 ring-black/5 overflow-hidden">
              <img alt="farmer" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1560493676-04071c5f467b?q=80&w=300&auto=format&fit=crop" />
            </div>
            <p>Join 10,000+ farmers already registered</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="relative"
        >
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/40 bg-white/40 backdrop-blur">
            <img
              src="https://images.unsplash.com/photo-1543257580-7269da773bf0?q=80&w=1280&auto=format&fit=crop"
              alt="Farmer using smartphone in field"
              className="w-full h-[360px] sm:h-[420px] object-cover"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 text-white drop-shadow">
              <p className="text-sm">AI-driven pricing and instant payments at your fingertips</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
