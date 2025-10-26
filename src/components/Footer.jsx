import React from 'react';
import { Leaf } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="border-t border-gray-200 bg-white/70 backdrop-blur">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="flex items-center gap-2 font-semibold text-green-700">
            <span className="p-2 rounded-lg bg-green-100 text-green-600"><Leaf size={20} /></span>
            CropFresh
          </div>
          <form className="flex gap-2" onSubmit={(e)=>e.preventDefault()}>
            <input type="email" placeholder="Subscribe to newsletter" className="px-4 py-2 rounded-full border border-gray-300 focus:outline-none" />
            <button className="px-4 py-2 rounded-full bg-green-600 text-white font-semibold hover:bg-green-700">Subscribe</button>
          </form>
        </div>
        <div className="mt-6 text-xs text-gray-500 flex flex-col sm:flex-row gap-2 sm:items-center sm:justify-between">
          <div>© {new Date().getFullYear()} CropFresh Technologies Pvt. Ltd. All rights reserved.</div>
          <div className="flex gap-4">
            <a href="#privacy" className="hover:text-green-700">Privacy</a>
            <a href="#terms" className="hover:text-green-700">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
