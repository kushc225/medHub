'use client'
import React, { useState } from 'react'
import { FaBars } from 'react-icons/fa'
import { ImCross } from 'react-icons/im'
import Link from 'next/link'
import './style.css'
const Navbar = () => {
    const [showNavbar, setShowNavbar] = useState(false)

    return (
        <div className='navbar header h-14 '>
            <div className=' px-4 h-full wrapper flex justify-between items-center'>
                <div className='company_name font-mono font-bold '>
                    <h1 className='text-2xl text-yellow-300'>
                        MedHub
                    </h1>
                </div>
                {
                    !showNavbar &&
                    <div className="bar md:hidden" onClick={() => setShowNavbar(true)}>
                        <FaBars className='text-2xl' />
                    </div>
                }

                {
                    showNavbar && <div className='dropdown md:hidden absolute border-2 w-screen top-0 left-0 h-screen '  >
                        <div className='flex w-screen'>


                            <ul className='flex flex-col mt-12 justify-center items-center w-full '>
                                <li onClick={() => setShowNavbar(!showNavbar)} className='px-2 overflow-hidden py-3 border-b-2 w-5/6 text-center'><Link className='text-2xl ' href="/">Home</Link></li>
                                <li onClick={() => setShowNavbar(!showNavbar)} className='py-3 border-b-2 w-5/6 text-center'><Link className='text-2xl ' href="/donate">Donate Us</Link></li>
                                <li onClick={() => setShowNavbar(!showNavbar)} className='py-3 border-b-2 w-5/6 text-center'><Link className='text-2xl ' href="/need">Need</Link></li>
                                <li onClick={() => setShowNavbar(!showNavbar)} className='py-3 border-b-2 w-5/6 text-center'><Link className='text-2xl ' href="/about">About</Link></li>
                                <li onClick={() => setShowNavbar(!showNavbar)} className='py-3 border-b-2 w-5/6 text-center'><Link className='text-2xl ' href="/contact">Contact Us</Link></li>
                                <li onClick={() => setShowNavbar(!showNavbar)} className='py-3 border-b-2 w-5/6 text-center'><Link className='text-2xl ' href="/login">Login</Link></li>
                                <li onClick={() => setShowNavbar(!showNavbar)} className='py-3 border-b-2 w-5/6 text-center'><Link className='text-2xl ' href="/signup">Sign Up</Link></li>
                            </ul>
                            <div onClick={() => setShowNavbar(false)} className=' pt-12 '>
                                <ImCross className='-ml-10 mt-4' />
                            </div>
                        </div>
                    </div>
                }

                <div className="hidden md:inline-block navbar ">
                    <ul className='md:flex   justify-end  items-center w-full '>
                        <li className='mx-2 '><Link className='md:text-xl lg:text-2xl ' href="/">Home</Link></li>
                        <li className='mx-2 '><Link className='md:text-xl lg:text-2xl ' href="/donate">Donate Us</Link></li>
                        <li className='mx-2 '><Link className='md:text-xl lg:text-2xl ' href="/need">Need</Link></li>
                        <li className='mx-2 '><Link className='md:text-xl lg:text-2xl ' href="/about">About</Link></li>
                        <li className='mx-2 '><Link className='md:text-xl lg:text-2xl ' href="/contact">Contact Us</Link></li>
                        <li className='mx-2 '><Link className='md:text-xl lg:text-2xl ' href="/login">Login</Link></li>
                        <li className='mx-2 '><Link className='md:text-xl lg:text-2xl ' href="/signup">Sign Up</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar