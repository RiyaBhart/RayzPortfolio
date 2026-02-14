import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Expectations from './components/Expectations';
import OurWork from './components/OurWork';
import OurClients from './components/OurClients';
import Testimonials from './components/Testimonials';
import ContactUs from './components/ContactUs';
import FluidBackground from './components/FluidBackground';
import Footer from './components/Footer';
import AudioPlayer from './components/AudioPlayer';

function App() {
  return (
    <div className="App">
      <FluidBackground />
      <AudioPlayer />
      <Navbar />
      <Hero />
      <div id="about"><About /></div>
      <div id="services"><Services /></div>
      <Expectations />
      <div id="work"><OurWork /></div>
      <div id="clients"><OurClients /></div>
      <div id="testimonials"><Testimonials /></div>
      <div id="contact"><ContactUs /></div>
      <Footer />
    </div>
  );
}

export default App;
