import React, { useEffect, useState } from 'react'
import { httpClient } from '../../utils/reques';
import axios from 'axios';
import { head } from 'lodash';

const Evaluation = () => {
    const [data, setData] = useState([]);
    const [modalOpen, setModalOpen] = useState(false);
    const [feedBack,setFeedBack] = useState('');
    const [score,setScore] = useState('')
    const [id,setId] = useState('')

    const getAllData = async () => {
        const { data } = await httpClient("/teacher/getUncheckedAttendanceResponse7dc072bf-460f-43f5-add1-7d32d050918c")
        setData(data)
        console.log(data);
    }

    useEffect(() => {
        getAllData();
    }, []);

    const toggleModal = () => {
        setModalOpen(!modalOpen);
    }

    const handLeSubmit = async (e: any) => {
        e.preventDefault(); // e.preventDefault() ni ochiq qoldirdim, ehtiyot bo'lish uchun
        const token = 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkMWQ4NmM1OC0zMWI5LTQxZjAtOTVkOC1jZmMzN2ZmZTgyOTEiLCJpYXQiOjE3MjcxNzkwNjUsImV4cCI6MTcyNzc4Mzg2NSwicm9sZXMiOlsiUk9MRV9URUFDSEVSIl19.EYOdo4RV_QkGCfa3XLDx5O86LuhiVPry3vCJqk8k6oc'; // Tokenni mana bu yerga kiritasiz
        const newData = { feedBack, score, id }; // kerakli ma'lumotlar
    
        try {
            await axios.put(
                "http://164.90.187.178:8080/api/v1/teacher/check-attendance",
                {newData},
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    }
                }
            );
            console.log("Request was successful");
        } catch (error: any) {
            console.error("Error during the request:", error.response ? error.response.data : error.message);
        }
        
        getAllData(); // So'rovdan keyin ma'lumotlarni qayta yuklash
    }

    return (
        <div>
            <div className='max-w-[1200px] m-auto'>
                <div className='h-screen w-full bg-gray-100 flex justify-center items-center rounded-lg'>
                    <div className='bg-white p-6 rounded-lg shadow-lg'>
                        <div className='max-w-[800px] mb-5'>
                            <video src={data.attendanceSource} controls className='rounded-lg'></video>
                        </div>
                        <div className='w-full flex items-center justify-between mb-4'>
                            <div>
                                <p className='text-lg font-semibold'>Modul: {data.currentModule}</p>
                                <p className='text-lg font-semibold'>Dars: {data.currentLesson}</p>
                            </div>
                            <div className='text-center'>
                                <p className='text-lg font-semibold'>{data.studentName} {data.studentSurname}</p>
                                <p>Student</p>
                            </div>
                        </div>

                        {/* Baxolash Button */}
                        <div className='text-center'>
                            <button 
                                onClick={toggleModal} 
                                className='bg-blue-500 text-black py-2 px-4 rounded hover:bg-blue-700 transition duration-300'>
                                Baxolash
                            </button>
                        </div>

                        {/* Modal */}
                        {modalOpen && (
                            <div className='fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center'>
                                <div className='bg-white p-6 rounded-lg shadow-lg w-[300px]'>
                                    <h3 className='text-xl mb-4'>Baholash</h3>
                                    <form onSubmit={handLeSubmit}>
                                    <div className='mb-4'>
                                        <label className='block mb-2'>Ball</label>
                                        <input 
                                        value={score}
                                        onChange={e => setScore(e.target.value)}
                                        type="number" 
                                        placeholder="0/100" 
                                        className='w-full px-3 py-2 border rounded' />
                                    </div>
                                    <div className='mb-4'>
                                        <label className='block mb-2'>Izoh</label>
                                        <input 
                                        value={feedBack}
                                        onChange={e => setFeedBack(e.target.value)}
                                        type="text" 
                                        placeholder="Izoh qoldiring" className='w-full px-3 py-2 border rounded' />
                                    </div>

                                    <div className='mb-4'>
                                        <label className='block mb-2'>Izoh</label>
                                        <input 
                                        value={id}
                                        onChange={e => setId(e.target.value)}
                                        type="text" 
                                        placeholder="Id" className='w-full px-3 py-2 border rounded' />
                                    </div>
                                    <div className='text-right'>
                                        <button 
                                            // onClick={toggleModal} 
                                            className='bg-blue-500 text-black py-2 px-4 rounded hover:bg-blue-700 transition duration-300'>
                                            Yopish
                                        </button>
                                    </div>
                                    </form>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Evaluation;
