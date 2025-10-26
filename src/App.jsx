import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import MainSections from './components/MainSections';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white text-gray-900">
      <Header />
      <Hero />
      <MainSections />
      <Footer />
    </div>
  );
}

export default App;
