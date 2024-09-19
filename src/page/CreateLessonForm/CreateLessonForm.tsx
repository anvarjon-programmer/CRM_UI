import React, { useState } from 'react';
import axios from 'axios';
import { configureStore } from '@reduxjs/toolkit';
import { httpClient } from '../../utils/reques';

const CreateLessonForm = () => {
  const [subjectName,setSubjectName] = useState('');
  const [aboutSubject,setAboutSubject] = useState('');
  const [extraLesson,setExtraLesson] = useState('');
  const [video,setVideo] = useState('')
  const [data,setData] = useState([])

  const handleSubmit = async(e) =>{
    e.preventDefault();
    const newData = {subjectName,aboutSubject,extraLesson,video}
    const {data} = await httpClient('/createLesson',newData);
    setData(data)
  }

  return (
    <div className='w-full h-full bg-slate-600'>
        <div className="flex justify-center items-center min-h-screen bg-white">
      <div className="w-full max-w-4xl bg-white p-8 rounded-lg shadow-lg grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="space-y-4">
          <h2 className="text-center text-xl font-semibold bg-blue-300 text-white py-3 rounded-lg">
            Dars yaratish
          </h2>

          <div>
            <label className="block font-semibold mb-2" htmlFor="title">
              Dars mavzu:
            </label>
            <input
              type="text"
              id="title"
              value={subjectName}
              onChange={e => setSubjectName(e.target.value)}
              placeholder="Mavzu.."
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
            />
          </div>

          

          <div>
            <label className="block font-semibold mb-2" htmlFor="description">
              Dars haqida:
            </label>
            <textarea
            value={aboutSubject}
            onChange={e => setAboutSubject(e.target.value)}
              id="description"
              placeholder="Dars haqida.."
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
            />
          </div>

          <div>
            <label className="block font-semibold mb-2" htmlFor="resources">
              Qo'shimcha darsliklar:
            </label>
            <input
              type="text"
              value={extraLesson}
              onChange={e => setExtraLesson(e.target.value)}
              id="resources"
              placeholder="Qo'shimcha linklar.."
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
            />
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-blue-500 text-white py-4 px-10 w-full rounded-lg bg-[#0477EA] hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Yuklash
            </button>
          </div>
        </div>
        <form className='flex items-center' onChange={handleSubmit}>

        <input
              type="file"
              id="title"
              value={video}
              onChange={e => setVideo(e.target.value)}
              placeholder="Mavzu.."
              className="relative w-[300px] h-[250px] bg-blue-500 rounded-lg flex justify-center items-center text-white bg-[#0477EA]"
            />
        </form>

        {/* Upload Section */}
        {/* <div className="flex justify-center items-center">
          <div className="relative w-[300px] h-[250px] bg-blue-500 rounded-lg flex justify-center items-center text-white bg-[#0477EA]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-20 h-20"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4v16m8-8H4"
              />
            </svg>
            <p className="absolute bottom-2 text-sm">
              video joylash uchun joy
            </p>
              
          </div>
        </div> */}
      </div>
    </div>
    </div>
  );
};

export default CreateLessonForm;
