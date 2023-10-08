'use client'
import React, { useState } from 'react'
import LockOpenIcon from '@mui/icons-material/LockOpen';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import Person4OutlinedIcon from '@mui/icons-material/Person4Outlined';
import './login.css'
const Login = () => {
    return (
        <div className='login_container  w-screen md:w-2/5 '>
            <div className='login_wrapper mx-4 flex flex-col px-4 py-4 rounded-xl'>
                <div className='flex justify-around pt-1 '>
                    <div className='login_button px-7 p-2  rounded-lg  text-white flex justify-center items-center shadow-lg'><span><Person4OutlinedIcon className=' icons' /></span> <button>Sign in</button></div>
                    <div className='login_button px-7 py-2 shadow-lg  rounded-lg  text-white flex justify-center items-center'><span><PersonAddAltOutlinedIcon className=' icons' /></span> <button>Sign up</button></div>
                </div>
                <div className=' mt-12  px-2 pt-2 '>
                    <div className=' flex items-center rounded-xl shadow-sm mt-7 input_wrapper px-2 py-2 '>
                        <div>
                            <Person4OutlinedIcon className='' />
                        </div>
                        <div className='w-full ml-2 '>
                            <input type="text" className='login_form_input py-3  outllne-none w-full' placeholder='Username' />
                        </div>
                    </div>

                    <div className=' flex items-center rounded-xl shadow-sm mt-7 input_wrapper px-2 py-2 '>
                        <div>
                            <LockOpenIcon className='' />
                        </div>
                        <div className='w-full ml-2 '>
                            <input type="password" className='login_form_input py-3  outllne-none w-full' placeholder='Password' />
                        </div>
                    </div>
                </div>
                <div className='ml-3 mt-7'>
                    <h1 className='text-blue underline'>Forgot Password?</h1>
                </div>
                <div className='login_button text-center shadow-lg  py-3 px- 2 rounded-xl mt-4 '>
                    <button className='text-white '>Sign In</button>
                </div>
                <div className='mt-7 flex'>
                    <h1>Don't have an Account ?  </h1>
                    <p className='text-blue-500 ml-2 underline'>
                        Sign up
                    </p>
                </div>
            </div>

        </div>
    )
}

export default Login