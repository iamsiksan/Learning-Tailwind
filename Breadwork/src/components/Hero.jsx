import React from 'react'
import {assets} from '../assets/assets'

function Hero() {
  return (
    <div className='flex flex-col sm:flex-row border border-gray-400 '>

        {/* Hero left Section */}
        <div className='w-full px-10 sm:w-1/2 flex justify-center items-center py-10 sm:py-5'>
        <div className='text-[#414141]'>
            <div className='flex flex-col py-5'>
            <h1 className='text-xl font-medium  lg:text-3xl leading-relaxed'>Post Your Designs.</h1>
            <h1 className='text-xl font-medium  lg:text-3xl leading-relaxed'>Discover Opportunities.</h1>
            <h1 className='text-xl font-medium  lg:text-3xl leading-relaxed'> Build Your Career.</h1>

        </div>
        <div className='flex  gap-2 '>
            <p className='font-normal text-xs md:text-base'>Join a community of creatives where you can showcase your work, connect with top talent, and find exciting opportunities to grow your career.</p>

        </div>

        <div className='flex mt-5 '>
            <a href="" role='button' className='text-xs sm:text-sm bg-[#01b3df] px-3 py-2 rounded-3xl text-white hover:text-black hover:bg-white '>Get started</a>
            <a href="" role='button' className='text-xs sm:text-sm bg-white px-3 py-2 rounded-3xl text-[#003140] border mx-2 '>Join Community</a>
            


        </div>

        </div>
        

        </div>
        
        {/* Hero Right Section */}

        <img src={assets.hero_image} className='w-full sm:w-1/2' alt="" />

    </div>
  )
}

export default Hero