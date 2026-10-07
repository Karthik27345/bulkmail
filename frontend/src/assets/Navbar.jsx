import React from 'react'
import { FaPaperPlane } from "react-icons/fa"
import {FiMoon, FiChevronDown, FiSun} from "react-icons/fi"

const Navbar = ({darkMode,setDarkMode}) => {
  return (
    <div className='flex justify-between items-center bg-white dark:bg-slate-900'>
<div className='m-2 flex gap-2'>

<FaPaperPlane className='text-blue-500 text-5xl'/>

<div>
       <h1 className='font-bold text-2xl text-slate-900 dark:text-white'>Bulk<span className='text-blue-400'>Mail</span></h1>

    <p className='text-gray-500 dark:text-gray-400 text-xs'>Send Once.Reach Everyone.</p>
</div>
 
</div>

<div className='flex gap-8 m-5 justify-around items-center'>
    <button onClick={()=>{setDarkMode(!darkMode)}} className='text-black dark:text-white text-2xl'>
      {darkMode? <FiSun />:<FiMoon />}
    </button>

    <p className='w-10 h-10 rounded-full bg-purple-500 flex items-center justify-center text-white font-semibold'>K</p>

    <p className='text-black font-semibold dark:text-white'>Karthik V</p>

   <FiChevronDown  className='dark:text-white'/>
</div>
       
    </div>
  )
}

export default Navbar