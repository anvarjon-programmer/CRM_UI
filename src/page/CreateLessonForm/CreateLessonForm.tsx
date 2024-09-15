import React, { useState } from 'react';
import axios from 'axios';

const CreateLessonForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    duration: '',
    description: '',
    resources: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/user', formData);
      console.log('Success:', response.data);
      setFormData({ title: '', duration: '', description: '', resources: '' });
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className='w-full h-full bg-slate-600'>
        <div className="flex justify-center items-center min-h-screen bg-white">
      <div className="w-full max-w-4xl bg-white p-8 rounded-lg shadow-lg grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Form Section */}
        <div className="space-y-4">
          {/* Header */}
          <h2 className="text-center text-xl font-semibold bg-blue-300 text-white py-3 rounded-lg">
            Dars yaratish
          </h2>

          {/* Lesson Title */}
          <div>
            <label className="block font-semibold mb-2" htmlFor="title">
              Dars mavzu:
            </label>
            <input
              type="text"
              id="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Mavzu.."
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
            />
          </div>

          {/* Lesson Duration */}
          <div>
            <label className="block font-semibold mb-2" htmlFor="duration">
              Dars davomiyligi:
            </label>
            <input
              type="text"
              id="duration"
              value={formData.duration}
              onChange={handleChange}
              placeholder="-- : --"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400 text-center"
            />
          </div>

          {/* Lesson Description */}
          <div>
            <label className="block font-semibold mb-2" htmlFor="description">
              Dars haqida:
            </label>
            <textarea
              id="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Dars haqida.."
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
            />
          </div>

          {/* Additional Resources */}
          <div>
            <label className="block font-semibold mb-2" htmlFor="resources">
              Qo'shimcha darsliklar:
            </label>
            <input
              type="text"
              id="resources"
              value={formData.resources}
              onChange={handleChange}
              placeholder="Qo'shimcha linklar.."
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-blue-500 text-white py-4 px-10 w-full rounded-lg bg-[#0477EA] hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Yuklash
            </button>
          </div>
        </div>

        {/* Upload Section */}
        <div className="flex justify-center items-center">
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
        </div>
      </div>
    </div>
    </div>
  );
};

export default CreateLessonForm;
