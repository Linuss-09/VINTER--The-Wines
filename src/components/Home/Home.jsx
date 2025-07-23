import React from 'react'
import wine from '../../assets/wine.jpg'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
      {/* for boaundary */}
      <div className="bg-emerald-950 h-screen">


      {/* main container */}
        <div className=" mx-4 flex justify-around px-16 py-2 space-x-2 p-8">

        {/* col 1 */}
          <div className="bg-purple-400 flex items-center justify-center h-[500px] mt-12 overflow-hidden w-1/2 rounded-lg shadow-xl shadow-black "> 
            <img src = {wine} alt="khamba" 
            className="max-w-full object-cover " />
          </div>



          {/* col 2 */}
          <div 
          className="font-mono rounded-md w-1/2 py-2 px-16 flex flex-col justify-start space-y-10 text-amber-100 tracking-tight ">
          {/* h1 */}
          <h1 className='text-6xl max-w-3xl mt-14 font-cinzel leading-16 tracking-wide '>SIP INTO 80 YEARS OF HERITAGE</h1>

          <p className="text-2xl font-cormo leading-9">Meet the timeless taste that aged like fine... well, wine.
          We've been bottling tradition since before your grandpa grew his first mustache.
          Smooth, rich, unapologetically classic — no hype, just history in every pour.
          </p>

          {/* button ig?? */}
          <Link
          to="/cocktails"
          >
          
          <button type="button" className='
          cursor-pointer
          shadow-md max-w-30 mt-4 px-3 py-2 font-pt rounded-md bg-black transition-transform hover:scale-103 duration-300 '>Explore wines</button>
          </Link>
          
          </div>



        </div>

    </div>
    </>
  )
}

export default Home