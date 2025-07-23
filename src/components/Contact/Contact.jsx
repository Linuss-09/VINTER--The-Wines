import React from 'react'
import wines4 from "../../assets/wine-middle.jpg"

function Contact() {

  const handlgeSubmit = (e) => {
    e.preventDefault()
    alert('Thank You! Your message has been sent sucessfully.')
  }

  return (
    <>
      {/* the main body kinda thing  */}
      <div className="pb-28 pt-10 p-4 bg-amber-50 min-h-screen"
      >

        {/* bg-[url('/wines-4.png')] min-h-screen */}


        <div className="border bg-[#004f3b] rounded-2xl
        shadow-xl shadow-neutral-800
        backdrop-blur-xs max-w-7xl mx-auto flex flex-col md:flex-row p-8 md:space-x-4 space-y-4 md:space-y-0 ">

          {/* container 1 */}
          <div className="text-white rounded-2xl  md:w-1/2 "
          >
          {/* kuch bhi heading idk */}
          <div className="bg-gradient-to-b from-neutral-800 to-neutral-900 mb-4 rounded-2xl text-left p-8">

            <h2 className=" text-3xl font-sans py-2">
              You Have Questions,
            </h2>
            <h2 className=" text-3xl font-sans pb-2 ">
              We Have the Finest Answers
            </h2>

          </div>

            <div className="aspect-[2/1]  ">
            <img 
            className='w-full h-full object-cover rounded-2xl'
            src={wines4} />
          </div>



            {/* a grid?? */}
            <div className="grid grid-cols-2 gap-4 py-2">
              {/* col1 */}
              <div className="bg-gradient-to-b from-neutral-800 to-neutral-900 rounded-2xl mt-4 p-8">
                  <h2 className="text-lg font-black">Location</h2>
                  <p className='font-'>Château Le Mirage</p>
                  <p>Rue des Vignobles, 78</p>
                  <p>France</p>
                </div>

              <div className=" bg-gradient-to-b from-neutral-800 to-neutral-900 rounded-2xl mt-4 p-8">
                  <h3 className="font-bold text-lg">Social Media</h3>
                  <ul className="flex flex-col">
                    <li className=""><a href="">Instagram</a></li>
                    <li className=""><a href="">Twitter</a></li>
                    <li className=""><a href="">Facebook</a></li>
                  </ul>
                </div>

              <div className=" bg-gradient-to-b from-neutral-800 to-neutral-950 rounded-2xl p-8">
                <h3 className="text-lg font-bold ">Email</h3>
                <p className="">vinter1945@gmail.com</p>
              </div>

              <div className="bg-gradient-to-b from-neutral-800 to-neutral-950 rounded-2xl p-8">
                  <h3 className="font-bold text-lg">Contact</h3>
                  <p className="">+33 556 002 001</p>
              </div>

            </div>

          </div>

          {/* container 2 */}
          <div className=" text-white bg-gradient-to-b from-neutral-800 to-neutral-950 rounded-2xl md:w-1/2">

                <h3 className="text-4xl p-8 pt-10 font-bo">Get Started</h3>
                <p className="px-8 text-lg text-gray-300 ">Our sommeliers and support team are here to assist you with every pour, bottle, or event</p>
                {/* FORM banaynege bc           */}
                <form 
                onSubmit={handlgeSubmit}
                className="flex flex-col px-4 py-8">
                  {/* first thing idk  */}
                  <div className=" flex py-4 px-3 justify-center items-center space-x-2 ">
                    {/* div 1  */}
                    <input type="text" placeholder='First Name' className="border py-2 px-2 rounded-lg w-1/2 focus:outline-none focus:ring-2 focus:ring-emerald-950 " />

                    <input type="text" placeholder='Last Name' className="border py-2 px-2 w-1/2 rounded-lg
                    focus:outline-none focus:ring-2 focus:ring-emerald-950 
                    " />
                  </div>

                  {/* phone numb and ocuntry */}
                  <div className="flex justify-center items-center py-4 px-3 space-x-2
                  
                  ">


                    <input 
                    className='border w-1/2 rounded-lg py-2 px-2
                    focus:outline-none focus:ring-2 focus:ring-emerald-950 
                    '
                    placeholder='Country'
                    type="text" name="text" 
                    />

                    <input
                    className='border w-1/2 rounded-lg py-2 px-2 
                    focus:outline-none focus:ring-2 focus:ring-emerald-950 
                    '
                    placeholder='Contact no.'
                    type="tel" name="contact"/>

                  </div>

                  {/* email */}
                  <div className="px-3 py-4 ">
                    <input 
                    className='border w-full rounded-lg py-2 px-2
                    focus:outline-none focus:ring-2 focus:ring-emerald-950 
                    '
                    placeholder='Email address'
                    type="email" name="email" />
                    </div>

{/*                   msg box */}
                    <div className="space-y-8 px-3 py-4">
                      <p className="ml-2 text-lg border-b text-gray-300 inline-block">Ask a question</p>

                      <textarea name="msg-box"
                      className='w-full p-4 border border-gray-300 
                      rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-800
                      resize-none

                      '
                      placeholder='Message'
                      rows="5"></textarea>
                    </div>

                    <div className="py-4 px-3">
                      <button 
                      className='border mt-2 w-full py-2 px-3 rounded-lg text-lg font-semibold text-gray-300 hover:bg-neutral-900 duration-75 transition
                      
                      '
                      type="submit">
                        Submit
                      </button>
                    </div>

                </form>
          </div>

        </div>




        {/* the flex container */}


      </div>
    </>
  )
}

export default Contact