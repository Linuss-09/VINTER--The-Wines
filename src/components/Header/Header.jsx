import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function Header() {
  return (
    <header className=" py-4 px-8  bg-emerald-950">
      <nav className=" mx-auto px-8 py-4 bg-white flex justify-between items-center shadow-md rounded-lg backdrop-blur-lg ">
        {/* div for logo */}
        <div className="font-antiqua font-extrabold text-3xl text-gray-800 tracking-wide">
          VINTER
          </div>


        {/* div for center list */}
        <div className="">
          <ul className='flex space-x-12 text-lg'>
            <li>
              <NavLink to="/" 
              className={({isActive}) => `${isActive ? "text-red-900 font-bold " : "text-black font-medium"} hover:text-red-700 hover:font-bold
               duration-75 transition-all hover:scale-105 `} >Home</NavLink>

            </li>

            <li>
              <NavLink to="/cocktails" className={({isActive}) => `${isActive ? "text-red-900 font-bold": "text-black font-medium"} hover:text-red-700 duration-75 transition-all hover:scale-105 hover:font-bold`} >Wine-Wall</NavLink>
            </li>
            <li>
              <NavLink to="/about" 
              className={({isActive}) => `${isActive ? "font-bold text-red-900 ": "text-black font-medium" } hover:text-red-800 duration-75 hover:scale-105 transition-all hover:font hover:font-bold` 
            } 
              >About</NavLink>
            </li>

            <li>
              <NavLink to="/contact" 
              
              className={({isActive}) => `${isActive ? "font-bold text-red-900 ": "text-black font-medium"} hover:text-red-700 transition-transform hover:scale-105 hover:font-bold duration-150 `}  >Contact us</NavLink>
            </li>

          </ul>
        </div>

        {/* div for left part idk what its called */}
        <div className="">
          <Link to="/contact" >
          <button className='cursor-pointer px-3 py-1.5 text-center 
          transition-transform hover:scale-105
          rounded-md duration-300 text-white bg-black '>Contact us</button>
          </Link>
        </div>

      </nav>
    </header> 
  )
}

export default Header