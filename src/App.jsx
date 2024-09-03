import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import Services from './components/Services';
import Projects from './components/Projects';
import ContactMe from './components/ContactMe';
import Footer from './components/Footer';


const App = () => {
  return (
    <div className="relative h-screen w-screen">
      <div className="absolute top-0 z-[-2] h-screen w-screen bg-white bg-[radial-gradient(100%_50%_at_50%_0%,rgba(0,163,255,0.13)_0,rgba(0,163,255,0)_50%,rgba(0,163,255,0)_100%)]"></div>

      <Navbar />
      <Hero />
      <AboutMe />
      <Services/>
      <Projects />
      <ContactMe />
      <Footer/>

     
    </div>
  );
}

export default App;
 