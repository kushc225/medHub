import React from 'react'
import './need.css'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
const Need = () => {
    const data = [
        {
            "medicine": {
                "name": "Aspirin",
                "brand": "Bayer",
                "dosage": "325mg",
                "form": "Tablet",
                "description": "Aspirin is a common pain reliever and fever reducer. It's used to treat various conditions, including headaches, muscle aches, toothaches, and arthritis.",
                "manufacturer": "Bayer AG",
                "active_ingredient": "Acetylsalicylic Acid",
                "prescription_required": false,
                "price": 5.99,
                "quantity_in_stock": 1000,
                "expiry_date": "2024-12-31",
                "ingredients": [
                    "Acetylsalicylic Acid",
                    "Microcrystalline Cellulose",
                    "Croscarmellose Sodium",
                    "Hypromellose",
                    "Stearic Acid"
                ],
                "warnings": [
                    "Do not take on an empty stomach.",
                    "Consult a doctor before using if you have a bleeding disorder.",
                    "Keep out of reach of children."
                ],
                "directions_for_use": "Take one tablet with a full glass of water. Repeat every 4-6 hours as needed, but do not exceed the recommended dosage.",
                "images": [
                    "image_url_1.jpg",
                    "image_url_2.jpg"
                ]
            }
        },
        {
            "medicine": {
                "name": "Ibuprofen",
                "brand": "Advil",
                "dosage": "200mg",
                "form": "Tablet",
                "description": "Ibuprofen is a nonsteroidal anti-inflammatory drug (NSAID) that is commonly used to relieve pain, reduce inflammation, and lower fever.",
                "manufacturer": "Pfizer",
                "active_ingredient": "Ibuprofen",
                "prescription_required": false,
                "price": 6.49,
                "quantity_in_stock": 800,
                "expiry_date": "2024-11-30",
                "ingredients": [
                    "Ibuprofen",
                    "Lactose Monohydrate",
                    "Croscarmellose Sodium",
                    "Magnesium Stearate",
                    "Hypromellose"
                ],
                "warnings": [
                    "Do not take if you have a history of stomach ulcers.",
                    "Consult a doctor before using if you are pregnant or have other medical conditions.",
                    "Keep out of reach of children."
                ],
                "directions_for_use": "Take one tablet every 4-6 hours as needed with food or a full glass of water.",
                "images": [
                    "image_url_3.jpg",
                    "image_url_4.jpg"
                ]
            }
        },
        // Add 8 more medicine objects with similar structures
    ];
    return (
        <>
            <div className='need_container w-full  mt-12  sm:w-96 md:w-4/6 lg:w-3/6'>
                <div className='mx-2 '>
                    <h1 className='py-3 font-bold text-center text-2xl font-mono'>Search Medicine</h1>
                    <div className='mt-4 '>
                        <div className=' flex flex-col md:flex-row w-full md:justify-around '>
                            <div className='w-full border-2 rounded-xl border-blue-500 md:w-3/6'>

                                <input type="text" placeholder='Enter Medicine' className='pl-2 w-full border-none bg-transparent outline-none py-3 ' />
                            </div>
                            <div className='mt-2 md:mt-0 rounded-xl py-2  hoverclass bg-blue-700  md:w-2/6 flex items-center justify-center'>
                                <SearchOutlinedIcon className='mr-2' />
                                <button className=''>Search</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Need