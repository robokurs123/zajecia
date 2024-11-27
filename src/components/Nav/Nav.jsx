import React , {useState} from 'react'

const Nav = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenu = () => {
    setShowMenu(!showMenu);
  }

  return (
    <div>
        <div className='relative container flex justify-between mx-auto items-center border-green-200' >

            <div className='mx-auto text-white text-2xl p-4'>
                <h1 className='' >Kurs robotyki i elektroniki</h1>
            </div>

            { showMenu &&
            
            <ul className='hidden text-yellow-50'>
                <li className='p-4 text-sm'>Home</li>
                <li className='p-4'>About</li>
                <li className='p-4'>Contact</li>
            </ul>
           
            }
            <div className='flex items-center justify-center absolute right-2 h-[30px] w-[30px] rounded-xl text-center bg-gradient-to-b from-transparent to-gray-100'>
              <div className=' text-white rounded-md z-10 w-3/4'>
                  <button onClick={handleMenu}>=</button>
              </div>
            </div>

 
        <ul className= {`fixed left-0 top-0 w-[150px] h-full text-yellow-400 z-40 border-r border-r-gray-500 bg-gray-800 transition-transform duration-300 ${showMenu ? 'translate-x-0' : '-translate-x-full' }`} >
            <li className='p-4 text-sm'>Home</li>
            <li className='p-4'>About</li>
            <li className='p-4'>Contact</li>
        </ul>
        

        </div>

        <div className='h-[3px] w-[400px] mx-auto bg-gradient-to-tr from-transparent via-black to-transparent opacity-25 dark:via-neutral-700'>
        </div> 

    </div>
  )
}

export default Nav