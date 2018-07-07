import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import Exemplar from './Exemplar';
import Features from './Features';
import About from './About';
import LatestNews from './LatestNews';
import SocialBrand from './SocialBrand';
import ContactUs from './Contact'
import Footer from './Footer';

const App = () => {
  return (
    <div id="app">
      <Navbar />
      <Hero />
      <Exemplar />
      <Features />
      <About />
      <LatestNews />
      <ContactUs />
      <SocialBrand />
      <Footer />
    </div>
  );
};

export default App;
