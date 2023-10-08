'use client'
import React from 'react'
import LockOpenIcon from '@mui/icons-material/LockOpen';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import Person4OutlinedIcon from '@mui/icons-material/Person4Outlined';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import HomeWorkOutlinedIcon from '@mui/icons-material/HomeWorkOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import '../login/login.css'
const Sign = () => {
    return (
        <div className='login_container mt-20 singup_container  w-screen md:w-3/5 lg:w-2/5 lg:mt-20 mb-12'>
            <div className='login_wrapper mx-4 flex flex-col px-4 py-4 rounded-xl'>

                <div className='flex justify-around px-2 '>
                    <div className='login_button px-7 py-2 shadow-sm  rounded-lg  text-white flex justify-center items-center'><span><PersonAddAltOutlinedIcon className=' icons' /></span> <button>Sign up</button></div>
                </div>
                <div className=' mt-2  px-2 py-2 '>
                    <div className='flex items-center shadow-sm mt-7 input_wrapper px-2 py-2 '>
                        <div>
                            <Person4OutlinedIcon className='' />
                        </div>
                        <div className='w-full ml-2 '>
                            <input type="text" className='login_form_input py-3  outllne-none w-full' placeholder='Username' />
                        </div>
                    </div>

                    <div className=' flex items-center shadow-sm mt-7 input_wrapper  px-2 py-2 '>
                        <div>
                            <LocalPhoneOutlinedIcon className='' />
                        </div>
                        <div className='w-full ml-2 '>
                            <input type="text" className='login_form_input py-3  outllne-none w-full' placeholder='Phone Number' />
                        </div>
                    </div>

                    <div className=' flex items-center shadow-sm mt-7 input_wrapper px-2 py-2 '>
                        <div>
                            <HomeWorkOutlinedIcon className='' />
                        </div>
                        <div className='w-full ml-2 '>
                            <input type="text" className='login_form_input py-3  outllne-none w-full' placeholder='Address' />
                        </div>
                    </div>

                    <div className=' flex items-center shadow-sm mt-7 input_wrapper px-2 py-2 '>
                        <div>
                            <MailOutlineOutlinedIcon className='' />
                        </div>
                        <div className='w-full ml-2 '>
                            <input type="email" className='login_form_input py-3  outllne-none w-full' placeholder='Email' />
                        </div>
                    </div>

                    <div className=' flex items-center shadow-sm mt-7 input_wrapper px-2 py-2 '>
                        <div>
                            <LockOpenIcon className='' />
                        </div>
                        <div className='w-full ml-2 '>
                            <input type="password" className='login_form_input py-3  outllne-none w-full' placeholder='password' />
                        </div>
                    </div>
                </div>
                <div className='ml-3 mt-7'>
                    <h1 className='text-blue underline'>Forgot Password?</h1>
                </div>
                <div className='login_button text-center shadow-lg  py-3 px- 2 rounded-xl mt-4 '>
                    <button className='text-white '>Sign In</button>
                </div>
                <div className='mt-7'>
                    <h1>Don't have an Account <span className='text-blue-500 underline'>Sign up</span></h1>
                </div>
            </div>

        </div>
    )
}

export default Sign