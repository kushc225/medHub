'use client'
import UserContext from '@/context/UserContext'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import React from 'react'
import { useContext } from 'react'

const Logout = () => {
    const router = useRouter();
    const { setToken, setUser } = useContext(UserContext)
    const handleLogout = async () => {
        try {
            await axios.get('/api/logout')
            localStorage.removeItem("token")
            setUser(null);
            setToken(undefined)
            router.push('/login')
        } catch (error) {
            console.log(error.message);
        }

    }
    return (
        <div className='w-full h-full flex justify-center items-center'>
            <button onClick={handleLogout} className='bg-blue-500 rounded-xl py-5 px-4'>Logout</button>
        </div>
    )
}

export default Logout