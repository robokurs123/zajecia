import React from 'react'
import img from '../../assets/solder.jpg'
import movie from '../../assets/robot.mp4'

// const bgStyle = {
//     backgroundImage: `url(${img})`,
//     backgroundSize: "cover", 
//     backgroundPosition: "center",
//     backgroundRepeat: "no-repeat",
//     width: "80%",
//     height: "auto", // This helps the image container adjust its height automatically based on content
//     aspectRatio: "16/9", 
// };

const Hero = () => {
  return (
    <div className="container" >
        <div className='flex justify-center items-center relative'>
 
            {/* <div className=" my-5 py-5 mx-auto overflow-hidden h-[240px] rounded-2xl">
                <img className='h-[300px] object-cover brightness-50 rounded-2xl' alt='' src={img} />
            </div> */}

            <div className='h-[240px] w-[360px] rounded-2xl overflow-hidden mt-4'>
                <video className='pt-10 left-0 top-0 w-full scale-150'
                    muted
                    autoPlay
                    loop
                    playsInline
                    disablePictureInPicture
                >
                    <source src={movie} type="video/mp4" />
                </video>
            </div>

            <div className='absolute w-[200px] -mr-28  text-white text-center px-4 bg-gray-500 rounded-3xl bg-opacity-80'>
                    <p className='text-[7px] my-3'>zastanawialas/les sie kiedys jak dziala ladowarka do telefonu albo skad paralizator ma takiego kopa? jak quadrocopter jest w stanie 
                        kontrolowac swoj lot? jak telefon rejestruje Twoj glos? jak czujnik ruchu wykrywa Twoja obecnosc?
                        w takim razie zapraszam Cie w podroz do swiata elektroniki i robotyki, opowiem Ci o wszystkim od poczatku na prostych przykladach, zbudujesz niejeden uklad a 
                        do tego jeszcze nauczysz sie programowac mikrokontrolery, co z tym zrobisz to juz twoja sprawa, a bedziesz mogl zrobic duzo ;)
                    </p>
            </div>
        </div>      
    </div>
  )
}

export default Hero