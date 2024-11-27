import React, { useEffect, useState } from 'react'

import Hero from './components/Hero/Hero.jsx'
import Description from './components/Description/Description.jsx'
import Nav from './components/Nav/Nav.jsx'
import Footer from './components/Footer/Footer.jsx'

import bgImage from "./assets/star.jpg"

import AOS from 'aos';
import 'aos/dist/aos.css';


const App = () => {
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    // This will run once the component is mounted (after the page loads)
    setHasLoaded(true);
  }, []);


  useEffect(() => {
    //offset should be irrelevant after adding contact part
    const zoomFactor = window.devicePixelRatio || 1; // Zoom factor
    const adaptiveOffset = -Math.max(50, 146 * zoomFactor); // Adjust offset based on zoom


    console.log(adaptiveOffset, zoomFactor)
    AOS.init({
      duration: 800, // Animation duration in milliseconds
      offset: adaptiveOffset,   // Offset before the animation starts
      once: true,   
      easing: 'ease-out', // Easing function
    });
  }, []);

  const bgStyle = {
    backgroundImage: `url(${bgImage})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
  }

  return (
    <div style={bgStyle} className='overflow-x-hidden bg-gray-700 w-full h-screen ' >
      <div className="backdrop-blur-md ">
        <Nav/>
        <Hero/>
        <Description />
        <Footer/>
      </div>
    </div>
  );
}

export default App