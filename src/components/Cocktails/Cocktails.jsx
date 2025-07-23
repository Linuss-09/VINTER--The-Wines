import React from 'react'
import {useLoaderData} from "react-router-dom"

function Cocktails() {

    const data = useLoaderData()
    console.log(data)


  return (
    <>
    {/* main body kind container */}
    <div className="min-h-screen bg-emerald-950 py-6">

        <div className="space-y-4">
        <h1 className='text-center text-4xl  text-white font-cinzel '>Wine-Wall</h1>
        <h1 className='text-center text-3xl mt-2 mb-8 text-white font-cinzel '>The Finest Collection of Wines</h1>
            
            </div>    

        {/* a main contianer */}
        <div className="max-w-7xl mx-auto py-4">
            {/* a main grid div  */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-y-8 gap-6 px-4 ">
                {data.map(item => (
                    <div 
                    key={item.id}

                    // main grid card
                    className="overflow-hidden h-full shadow-lg shadow-neutral-800 rounded-lg duration-300  hover:scale-103 hover:shadow-2xl 
                    transition-all  hover:-translate-y-1
                    ">
                    

                        {/* IMAGE div */}
                        <div className=" aspect-[3/4] bg-[#f6f6f8] ">

                            {/* actuall image */}
                            <img 
                            className='w-full h-full object-cover border-b-2 border-b-gray-700 '
                            src={item.image} alt="Drink" />

                            <div className="flex md:max-w-3xl flex-col justify-center items-center  p-4">

                        <h2 className='text-center text-black  mt-2 mb-1 text-2xl font-semibold font-ubuntu' >{item.wine} </h2>
                        <p className="text-center font-inter text-black">From- {item.winery} </p>
                        <p className="text-lg mt-2 text-amber-800 font-bold font-ubuntu border-b">${item.price}</p>

                            </div>
                        
                        </div>

                    </div>
                ))}
            </div>
        </div>

    </div>
    </>
  )
}

export default Cocktails        

export async function cocktailsLoader({params}) {
    const res = await fetch('/wines.json')
    if(!res.ok) {
        throw new Response ("Failed to load the data", {status: 404})
        
    }
    // const allWines = await res.json()
    // const wines = allWines.slice(0,9)

    const allWines = await res.json()
    return allWines;


    // return wines;
}