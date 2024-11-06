import React from 'react'

const Services = () => {
    const list = [1, 5, 3];

  return (
    <div className='bg-black text-white '>
        <div className='container'>
            <div className='min-h-[300px]'>
                <div className='grid grid-cols-3  gap-10'>
                    {list.map((item,index) => (
                        <div className='bg-gray-700 flex flex-col min-h-[140px] justify-center items-center text-center rounded-xl'>
                            <h2>{item}</h2>
                            <p> ppp </p>
                            <p className='text-sm'>fsadfas ddsaf xt</p>
                            
                            </div>
                    ))}
                    
                    
                </div>
            </div>

        </div>
        
    </div>
  )
}

export default Services