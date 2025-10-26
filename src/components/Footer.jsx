import React from 'react'
import { Mail, Github, Linkedin, Twitter, Globe } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="mt-20 border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 grid md:grid-cols-4 gap-8">
        <div className="md:col-span-2">
          <div className="text-xl font-extrabold">CropFresh</div>
          <p className="mt-2 text-sm text-gray-600 max-w-md">
            Building India's trusted AI-powered agricultural marketplace to empower farmers and connect markets directly.
          </p>
          <div className="mt-4 flex items-center gap-3 text-gray-600">
            <a href="#" className="p-2 rounded-lg hover:bg-gray-100" aria-label="Website"><Globe size={18}/></a>
            <a href="#" className="p-2 rounded-lg hover:bg-gray-100" aria-label="Twitter"><Twitter size={18}/></a>
            <a href="#" className="p-2 rounded-lg hover:bg-gray-100" aria-label="LinkedIn"><Linkedin size={18}/></a>
            <a href="#" className="p-2 rounded-lg hover:bg-gray-100" aria-label="GitHub"><Github size={18}/></a>
          </div>
        </div>

        <div>
          <div className="font-semibold">Company</div>
          <ul className="mt-3 space-y-2 text-sm text-gray-600">
            <li><a className="hover:underline" href="#">About</a></li>
            <li><a className="hover:underline" href="#features">Features</a></li>
            <li><a className="hover:underline" href="#how">How It Works</a></li>
            <li><a className="hover:underline" href="#demo">Platform Demo</a></li>
          </ul>
        </div>

        <div>
          <div className="font-semibold">Legal</div>
          <ul className="mt-3 space-y-2 text-sm text-gray-600">
            <li><a className="hover:underline" href="#">Privacy</a></li>
            <li><a className="hover:underline" href="#">Terms</a></li>
            <li><a className="hover:underline" href="#">Contact</a></li>
          </ul>
          <form className="mt-4" onSubmit={(e)=>{e.preventDefault(); alert('Subscribed!')}}>
            <label className="text-sm font-medium">Newsletter</label>
            <div className="mt-2 flex items-center gap-2">
              <input type="email" required placeholder="Email address" className="w-full rounded-lg border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-600" />
              <button className="rounded-lg bg-green-600 text-white px-3 py-2 text-sm font-semibold hover:bg-green-700">Subscribe</button>
            </div>
          </form>
        </div>
      </div>
      <div className="py-4 border-t text-center text-xs text-gray-500">
        © {new Date().getFullYear()} CropFresh. All rights reserved.
      </div>
    </footer>
  )
}
