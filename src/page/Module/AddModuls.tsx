import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { httpClient } from '../../utils/reques';
import { FaPlus } from "react-icons/fa";
import { MdDelete,MdEdit } from "react-icons/md";

// Define types for your module and lesson
interface Lesson {
  number: number;
  title: string;
}

interface Module {
  id: string; // assuming module has a unique string id
  moduleNumber: string;
  lesson: Lesson[];
}

const AddModuls: React.FC = () => {
  const [modules, setModules] = useState<Module[]>([]);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [newModule, setNewModule] = useState<string>('');
  const [dropdownState, setDropdownState] = useState<{ [key: string]: boolean }>({});
  const [subDropdownState, setSubDropdownState] = useState<{ [key: string]: boolean }>({});
  const [data, setData] = useState<Module[]>([]);

  const toggleDropdown = (moduleId: string) => {
    setDropdownState((prevState) => ({
      ...prevState,
      [moduleId]: !prevState[moduleId],
    }));
  };

  const toggleSubDropdown = (moduleId: string) => {
    setSubDropdownState((prevState) => ({
      ...prevState,
      [moduleId]: !prevState[moduleId],
    }));
  };

  const addModule = () => {
    setModules([...modules, { id: (modules.length + 1).toString(), moduleNumber: newModule, lesson: [] }]);
    setNewModule('');
    setIsModalOpen(false);
  };

  const deleteModule = (id: string) => {
    setModules(modules.filter((module) => module.id !== id));
  };

  const getAllData = async () => {
    const { data } = await httpClient("/teacher/getAllModulesOfSubject/c5a3ff91-82b4-400c-871c-315e7118f07b");
    setData(data);
    console.log(data);
  };
  useEffect(() => {
    getAllData();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 flex justify-center items-center bg-gray-100">
      <div className="bg-white overflow-y-scroll p-6 rounded-xl shadow-xl w-full h-[500px] max-w-[1000px] -mt-[55px]">
        <h1 className='text-center '>Modul qo'shish</h1>
        <div className="flex justify-between items-center bg-gradient-to-r bg-[#25AFDC] text-white p-4 rounded-t-xl">
          <h1 className="text-xl font-bold">Modullar Ro'yxati</h1>
          <button className="text-2xl" onClick={() => setIsModalOpen(false)}>
            <Link to='/CreateLessonForm'>+</Link>
          </button>
        </div>

        {data.map((item, index) => (
          <div key={index}>
       <div className="text-white bg-[#25AFDC] w-full my-2 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center justify-between">
      <button
        onClick={() => toggleDropdown(item.moduleNumber)}
        className="text-white bg-[#25AFDC] w-full  hover:bg-blue-800  focus:ring-blue-300 font-medium rounded-lg text-sm  text-center inline-flex items-center justify-between"
        type="button"
      >
        <span className="flex items-center">
          {item.moduleNumber}
        </span>
      </button>

      <Link to="/createLessonForm" className="ml-2">
        <FaPlus className="text-white hover:text-blue-800" />
      </Link>
    </div>

    {dropdownState[item.moduleNumber] && (
      <div className="z-10 bg-white divide-y divide-red-500 rounded-lg shadow">
        <div className="py-2 text-sm text-gray-700">
          <div>
            {item.lesson.map((it, i) => (
              <div key={i} className="flex items-center justify-between rounded-md border mt-2 px-3 w-full gap-5 py-2 hover:bg-gray-100">
                <span className="flex gap-3">
                  <p>{it.number}</p>
                  <p>{it.title}</p>
                </span>
                <span className="flex items-center gap-4">
                  <MdEdit size={20} />
                  <button onClick={() => deleteModule(item.moduleNumber)}>
                    <MdDelete size={20} />
                  </button>
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    )}
  </div>
))}


        {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center">
            <div className="bg-white p-6 rounded-lg shadow-2xl w-full max-w-md">
              <h2 className="text-2xl font-bold mb-4 text-gray-800">Modul qo'shish</h2>
              <input
                type="text"
                value={newModule}
                onChange={(e) => setNewModule(e.target.value)}
                className="border border-gray-300 p-3 w-full rounded-lg mb-4 focus:outline-none focus:ring-2"
                placeholder="Modul nomini kiriting"
              />
              <div className="flex justify-end space-x-4">
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="bg-gray-300 text-black px-4 py-2 rounded-lg hover:bg-gray-400"
                >
                  Bekor qilish
                </button>
                <button
                  onClick={addModule}
                  className="from-purple-500 to-blue-500 text-white px-4 py-2 rounded-lg hover:bg-gradient-to-r hover:from-purple-600 hover:to-blue-600"
                >
                  Qo'shish
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AddModuls;