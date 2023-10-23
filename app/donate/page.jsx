'use client'
import React, { useState } from 'react'
import c from '../../animation/c.json'
import { AiOutlineMedicineBox } from 'react-icons/ai'
import { AiOutlineEdit } from 'react-icons/ai'
import { MdDeleteOutline } from 'react-icons/md'
import './donate.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import axios from 'axios'
const Donate = (props) => {
    const [allMedicineList, setAllMedicineList] = useState([])
    const [data, setData] = useState("")

    const [activeAdd, setActiveAdd] = useState(true);
    const [globalId, setGlobalId] = useState(true);

    const addMedicine = () => {
        setAllMedicineList([...allMedicineList, data])
        setData("");
    }
    const del = (id) => {
        const newList = allMedicineList.filter((element, idx) => idx != id)
        setAllMedicineList(newList);
    }
    const edit = (id) => {
        setGlobalId(id);
        setActiveAdd(false);
        const temp = allMedicineList.filter((items, idx) => idx === id)
        setData(temp);
    }
    const addEditedMedicine = () => {
        setActiveAdd(true);
        const temp = allMedicineList.map((ele, idx) => {
            if (idx == globalId) {
                ele = data;
            }
            return ele;
        })
        setAllMedicineList(temp);
        setData("");
    }

    const submitHanlder = async () => {
        try {
            const token = localStorage.getItem("token");
            const list = { list: allMedicineList, token }
            let res = await axios.post('/api/donate', list)

            let flag = res.data.success;
            let toast_handler = toast.error;
            if (flag) {
                toast_handler = toast.success;
            }
            toast_handler(`${res.data.msg}`, {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
            // toast(res.data.msg);
        } catch (error) {
            toast(error.messaage);
        }
    }


    return (
        <>

            <div className='donate_container  mt-12 mx-2 '>
                <div className='donate_heading '>
                    <h1 className='capitalize text-center mg:text-3xl lg:text-3xl mt-2 text_black'>please Enter the details of the medicine</h1>
                </div>
            </div>
            <div className=''>
                <div className='mx-2 '>
                    <div className=' mt-8 flex  items-center justify-center  '>
                        <div className=' flex items-center py-2 shadow-lg border-2 border-blue-500 rounded-xl md:w-2/3'>
                            <AiOutlineMedicineBox className='w-12 h-7 ' />
                            <input name="med" value={data} onChange={(e) => setData(e.target.value)} type="text" placeholder='Medicine Name' className='w-full bg-transparent border-none outline-none text-xl' />
                        </div>
                        {
                            activeAdd ? (<button onClick={() => addMedicine()} className=' text-2xl border-2 border-green-500 px-5 mx-2  rounded-xl py-2 shadow-lg'>+</button>) :
                                (<button onClick={() => addEditedMedicine()} className=' text-2xl border-2 border-green-500 px-5 mx-2  rounded-xl py-2 shadow-lg'>
                                    <AiOutlineEdit className='ml-2 w-6 h-6' />
                                </button>)
                        }
                    </div>
                    <div className=' ml-3 mt-4 ws-full md:flex  md:flex-col md:items-center'>

                        {
                            allMedicineList.map((items, i) => {
                                return <>
                                    <Temp key={i} edit={edit} del={del} id={i} title={items} />
                                </>
                            })
                        }
                    </div>

                    {
                        allMedicineList.length >= 1 && (<div className='text-center mt-3'>
                            <button onClick={() => submitHanlder()} className='py-2 px-3 border-2 border-blue-400 rounded-xl hoverclass hover:bg-blue-500  hover:text-white transition-all text_black'>Save List</button>
                        </div>)
                    }
                </div>
            </div>

            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
        </>

    )
}
const Temp = ({ title, id, edit, del }) => {

    return <>
        <div className=' shadow-lg bggreen flex rounded-lg mt-4 md:justify-center md:w-2/3'>
            <div className='flex items-center justify-between mx-2 w-full'>
                <h1 className='text-white text-2xl py-2 font-sans overflow-scroll md:line-clamp-1'>{title}</h1>
                <div className='flex'>
                    <AiOutlineEdit onClick={() => edit(id)} className=' ml-2 w-6 h-6 ' />
                    <MdDeleteOutline onClick={() => del(id)} className='ml-2 w-6 h-6' />
                </div>
            </div>
        </div>
    </>
}

export default Donate