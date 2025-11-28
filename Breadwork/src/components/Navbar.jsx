import React, { useState } from 'react'
import {assets} from '../assets/assets.js'
import { NavLink } from 'react-router-dom'

function Navbar() {

    const [visible, setVisible] = useState(false)
    
  return (
    
    <div className='flex items-center justify-between py-5 font-medium'>
        <img src={assets.Breadwork_logo2} className='w-40' alt="" />
        
        <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>

        <NavLink to='/' className='flex flex-col items-center gap-1'>
            <p>Home</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />

        </NavLink>
        <NavLink to='/explore' className='flex flex-col items-center gap-1'>
            <p>Explore</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />

        </NavLink>
        <NavLink to='/hiretalent' className='flex flex-col items-center gap-1'>
            <p>Hire Talent</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />

        </NavLink>
        <NavLink to='/gethired' className='flex flex-col items-center gap-1'>
            <p>Get Hired</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />

        </NavLink>
        <NavLink to='/community' className='flex flex-col items-center gap-1'>
            <p>Community</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />

        </NavLink>
        </ul>

        <div className='flex items-center gap-6'>
            <img src={assets.search_icon} className='w-5 cursor-pointer' alt="" />

            <div className='group relative'>
                <img src={assets.profile_icon} className='w-5 cursor-pointer' alt="" />
                <div className='group-hover:block  hidden absolute right-0 pt-4'>
                    <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded'>
                        <p className='cursor-pointer hover:text-black'>My Profile</p>
                        <p className='cursor-pointer hover:text-black'>Setting</p>
                        <p className='cursor-pointer hover:text-black'>Logout</p>

                    </div>

                </div>

            </div>

            <img onClick={()=>setVisible(true)} src={assets.menu_icon} className='w-5 cursor-pointer sm:hidden' alt="" />

        </div>

        {/* Sidebar menu for smaller screen */}

        <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible ? 'w-full' : 'w-0'}`}>
            <div className='flex flex-col text-gray-600'>
                <div onClick={()=>setVisible(false)} className='flex items-center gap-4 p-3'>
                    <img src={assets.dropdown_icon} className=' h-4 rotate-180' alt="" />
                    <p>Back</p>
                </div>
                <NavLink to='/'  onClick={()=>setVisible(false)} className='py-2 pl-6 border-b border-gray-200'>Home</NavLink>
                <NavLink to='/explore' onClick={()=>setVisible(false)} className='py-2 pl-6 border-b border-gray-200'>Explore</NavLink>
                <NavLink to='/hiretalent' onClick={()=>setVisible(false)} className='py-2 pl-6 border-b border-gray-200'>Hire Talent</NavLink>
                <NavLink to='/gethired' onClick={()=>setVisible(false)} className='py-2 pl-6 border-b border-gray-200'>Get Hired</NavLink>
                <NavLink to='/community' onClick={()=>setVisible(false)} className='py-2 pl-6 border-b border-gray-200'>Community</NavLink>
                

            </div>

        </div>
        
    </div>
  )
}

export default Navbar