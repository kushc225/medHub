'use client'
import React, { useState } from 'react'
import './need.css'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import axios from 'axios';
const Need = () => {
    const [data, setData] = useState(null);
    const [madName, setMedName] = useState("")
    const searchHanlder = async () => {
        try {
            let res = await axios.post('/api/search', { med_name: madName });
            res = res.data.list;
            const results = [];
            for (const ele of res) {
                const temp = await axios.post('/api/getuser', { 'id': ele });
                results.push(temp.data.user);
            }
            setData(results)
        } catch (error) {
            console.log(error.message);
        }
    }
    console.log(data)
    return (
        <>
            <div className='need_container w-full mt-40 sm:w-5/6 md:w-4/6 lg:w-3/6 '>
                <div className='mx-2 '>
                    <h1 className='py-3 font-bold text-center text-2xl font-mono text_black'>Search Medicine</h1>
                    <div className='mt-4 '>
                        <div className=' flex flex-col md:flex-row w-full md:justify-around '>
                            <div className='w-full border-2 rounded-xl border-blue-500 md:w-3/6'>

                                <input type="text" placeholder='Enter Medicine' value={madName} onChange={(e) => setMedName(e.target.value)} className='pl-2 w-full border-none bg-transparent outline-none py-3 ' />
                            </div>
                            <div onClick={searchHanlder} className='mt-2 md:mt-0 cursor-pointer  rounded-xl py-2  hoverclass bg-blue-700  md:w-2/6 flex items-center justify-center'>
                                <SearchOutlinedIcon className='mr-2' />
                                <button className=''>Search</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='flex justify-center need_page_table_container flex-col mt-2'>
                    {data !== null && <div className='flex rounded-xl justify-around mt-3 px-2 py-2 border-2 border-blue-500'>
                        <h1 className='font-bold uppercase text_black'>Sno</h1>
                        <h1 className='font-bold uppercase text_black'>Name</h1>
                        <h1 className='font-bold uppercase text_black'>phone</h1>
                    </div>
                    }
                    {
                        data !== null && data.map((ele, idx) => {
                            return <Card
                                idx={idx}
                                name={ele.name}
                                phone={ele.phone_no}
                                key={idx}
                            />
                        })
                    }
                </div>
            </div>
        </>
    )
}

const Card = ({ name, phone, idx }) => {
    return <>
        <div className={` ${idx % 2 !== 0 ? ' odd ' : ' '} ' flex justify-around shadow-sm mt-3 px-2  border-2 border-blue-500 py-2 rounded-xl'`}>
            <h1 className='text_black '>{idx + 1}</h1>
            <h1 className='text_black capitalize'>{name}</h1>
            <h1 className='text_black capitalize'>{phone}</h1>
        </div>
    </>
}

export default Need