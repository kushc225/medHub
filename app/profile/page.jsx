'use client'
import UserContext from '@/context/UserContext'
import React, { useContext } from 'react'
const Profile = () => {
    const { user } = useContext(UserContext);
    console.log(user)
    return (
        <>
            <div>welcome  {`you name is ${user.name} and your id is ${user.id}, and email is ${user.email}`}</div>
        </>
    )
}

export default Profile