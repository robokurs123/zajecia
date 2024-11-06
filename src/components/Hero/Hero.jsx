import React from 'react'
import img from '../../assets/solder.jpg'

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
        <div className='flex justify-center relative'>
 
            <div className=" my-5 py-5 mx-auto overflow-hidden h-[240px] rounded-2xl">
                <img className='h-[300px] object-cover brightness-50 rounded-2xl' alt='' src={img} />
            </div>

            <div className='absolute top-1/4 mr-28 w-[200px] h-[170px] bg-gray-500 rounded-3xl '>
                <div className='pt-2 px-2 text-white text-center space-y-1'>
                    <h2>robotyka</h2>
                    <p className='text-[7px] '>zastanawialas/les sie kiedys jak dziala ladowarka do telefonu albo skad paralizator ma takiego kopa? jak quadrocopter jest w stanie 
                        kontrolowac swoj lot? jak telefon jest w stanie nagrac Twoj glos? jak czujnik ruchu jest w stanie wykryc Twoja obecnosc?
                        w takim razie zapraszam Cie w podroz do swiata elektroniki i robotyki, opowiem Ci o wszystkim od poczatku na prostych przykladach, zbudujesz niejeden uklad a 
                        do tego jeszcze nauczysz sie programowac mikrokontrolery, co z tym zrobisz to juz twoja sprawa, a bedziesz mogl zrobic duzo ;)
                    </p>
                </div>

            </div>
        </div>

      
    </div>
  )
}

export default Hero


     
        


    // </div>