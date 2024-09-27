import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { httpClient } from '../../utils/reques';
import { FaPlus } from "react-icons/fa";
import { MdDelete,MdEdit } from "react-icons/md";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface Lesson {
  number: number;
  title: string;
}

interface Module {
  id: string; 
  moduleNumber: string;
  lesson: Lesson[];
}

const AddModuls: React.FC = () => {
  const [modules, setModules] = useState<Module[]>([]);
  const [dropdownState, setDropdownState] = useState<{ [key: string]: boolean }>({});
  const [data, setData] = useState<Module[]>([]);
  const [modulValue,setModulValue] = useState('')

  const toggleDropdown = (moduleId: string) => {
    setDropdownState((prevState) => ({
      ...prevState,
      [moduleId]: !prevState[moduleId],
    }));
  };

  // const toggleSubDropdown = (moduleId: string) => {
  //   setSubDropdownState((prevState) => ({
  //     ...prevState,
  //     [moduleId]: !prevState[moduleId],
  //   }));
  // };


  const deleteModule = (id: string) => {
    setModules(modules.filter((module) => module.id !== id));
  };

  const getAllData = async () => {
    const { data } = await httpClient("/teacher/getAllModules");
    setData(data);
    console.log(data);
  };
  useEffect(() => {
    getAllData();
  }, []);
  const [isOpenAddModul,setIsOpenAddModul] = useState(false);

  const getModuleId = async (e) => {
    e.preventDefault(); // Uncomment if necessary to prevent form submission
  
    try {
      const res = await httpClient.post('/teacher/create-module', { modulValue });
  
      if (res.status === 200) {
        getAllData(); // Refresh data after module creation
        toast.success('Modul muvaffaqiyatli qo\'shildi!'); // Success notification
      } else {
        toast.error('Modulni qo\'shishda xatolik yuz berdi.');
      }
    } catch (error) {
      toast.error('Modulni qo\'shishda xatolik yuz berdi.');
      console.error('Error:', error);
    }
  };




  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 flex justify-center items-center bg-gray-100">
      <div className="bg-white overflow-y-scroll p-6 rounded-xl shadow-xl w-full h-[500px] max-w-[1000px] -mt-[55px]">
        <h1 className='text-center '>Modul qo'shish</h1>
        <div className="flex justify-between items-center bg-gradient-to-r bg-[#25AFDC] text-white p-4 rounded-t-xl">
          <h1 className="text-xl font-bold">Modullar Ro'yxati</h1>

          {isOpenAddModul ? (
  <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
    onClick={() => setIsOpenAddModul(false)} >
    <div className="bg-white rounded-lg p-6 shadow-lg w-full max-w-sm" onClick={(e) => e.stopPropagation()} >
      {/* <form onSubmit={getModuleId}> */}
      <input type="text" 
      value={modulValue}
      onChange={e => setModulValue(e.target.value)}
      className="w-full border border-gray-300 text-black rounded-lg px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Modul nomini kiriting"/>
        <div className='flex justify-end space-x-2'>
        <button onClick={() => {
          setIsOpenAddModul(false)
          getModuleId()
          }} className="bg-gray-300 ml-auto text-black px-4 py-2 rounded-lg hover:bg-gray-400">
          Qo'shish
        </button>
        </div>

      {/* </form> */}
        
    </div>
  </div>
) : null}


          <button className="text-2xl" onClick={() => setIsOpenAddModul(true)}>
            +
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

      <div>
      <Link to={`/createLessonForm?id=${item.module_id}`} className="ml-2">
        <FaPlus className="text-white hover:text-blue-800" />
      </Link>
      </div>
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
      </div>
    </div>
  );
};

export default AddModuls;