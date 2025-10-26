import React from 'react';
import Header from './components/Header';
import Highlights from './components/Highlights';
import FlowAndDemo from './components/FlowAndDemo';
import SocialAndFooter from './components/SocialAndFooter';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 via-white to-white text-gray-900">
      <Header />
      <Highlights />
      <FlowAndDemo />
      <SocialAndFooter />
    </div>
  );
}

export default App;
