import React, { useState } from 'react';
import { httpClient } from '../../utils/reques';

const CreateLessonForm = () => {
  const [subjectName, setSubjectName] = useState('');
  const [aboutSubject, setAboutSubject] = useState('');
  const [extraLesson, setExtraLesson] = useState('');
  const [video, setVideo] = useState('');
  const [data, setData] = useState([]);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const newData: any = { subjectName, aboutSubject, extraLesson, video };
    const { data } = await httpClient('/createLesson', newData);
    setData(data);
  };

  return (
    <div className="w-full h-full bg-gray-100">
        <h1>Video Joylash uchun joy</h1>
      <div className="flex justify-center items-center min-h-screen">
        <div className="w-full max-w-5xl bg-white p-8 rounded-lg shadow-lg grid grid-cols-1 lg:grid-cols-2 gap-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <h2 className="text-center text-2xl font-semibold text-white bg-blue-600 py-3 rounded-lg">
              Dars yaratish
            </h2>

            <div>
              <label className="block font-semibold mb-2 text-gray-700" htmlFor="title">
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
              <label className="block font-semibold mb-2 text-gray-700" htmlFor="description">
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
              <label className="block font-semibold mb-2 text-gray-700" htmlFor="resources">
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
                className="bg-blue-600 text-white py-4 px-8 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 w-full"
              >
                Yuklash
              </button>
            </div>
          </form>
          <div className="flex flex-col justify-center items-center mt-10">
            <input
              type="text"
              id="video"
              value={video}
              onChange={e => setVideo(e.target.value)}
              className="w-[300px] h-[280px] bg-blue-100 rounded-lg flex justify-center items-center text-white bg-cover bg-center bg-[#25AFDC]"
              style={{
                backgroundImage: `url('https://cdn-icons-png.flaticon.com/512/32/32339.png')`,
              }}
            />
            <p className="text-center mt-4 text-gray-700">Video joylash uchun joy</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateLessonForm;
