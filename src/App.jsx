import React, { useEffect } from 'react'

import Hero from './components/Hero/Hero.jsx'
import Description from './components/Description/Description.jsx'
import Nav from './components/Nav/Nav.jsx'
import Footer from './components/Footer/Footer.jsx'
import AOS from 'aos';
import 'aos/dist/aos.css';


const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 600, // Animation duration in milliseconds
      offset: 0,   // Offset before the animation starts
      once: true,   
      easing: 'ease-out', // Easing function
    });
  }, []);


  return (
    <div className='overflow-x-hidden bg-gray-700'>
      <Nav/>
      <Hero/>
      <Description />
      <Footer/>
    </div>
  );
}

export default App