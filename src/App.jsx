import React from 'react'

import Hero from './components/Hero/Hero.jsx'
import Services from './components/Services/Services.jsx'
import Nav from './components/Nav/Nav.jsx'


const App = () => {
  return (
    <div className='overflow-x-hidden bg-gray-700'>
      <Nav/>
      <Hero/>
    </div>
  );
}

export default App