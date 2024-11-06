import React from 'react'
import movie from '../../assets/movie.mp4'

const Hero = () => {
  return (
    <div className='relative bg-black h-screen text-white' >
    {/* <div className= "absolute pt-3 top-0 z-30 right-0 w-full bg-gradient-to-b from-black from-0% to-transparent to-100% h-[50px] sm:h-[100px] md:[120px]">
        </div> */}

<div className="absolute top-0 left-0 w-full h-[100px] bg-gradient-to-b from-black to-transparent"></div>

    
    <video className=' h-full w-full object-cover pt-1 gradient'
        muted
        autoPlay
        loop
        playsInline
        disablePictureInPicture
    >
        <source src={movie} type="video/mp4" />
    </video>

    </div>

  )
}

export default Hero