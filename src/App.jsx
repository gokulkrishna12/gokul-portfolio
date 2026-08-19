import React from 'react';
import Navbar from './components/Navbar';
import HeroVideo from './components/HeroVideo';
import MarqueeTicker from './components/MarqueeTicker';
import JourneyTimeline from './components/JourneyTimeline';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './styles/main.scss';

function App() {
  return (
    <div className="portfolio-root">
      <Navbar />
      <main className="portfolio-app">
        <HeroVideo />
        <MarqueeTicker />
        <JourneyTimeline />
        <TechStack />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;