import React, { useState } from 'react';

const AddModuls = () => {
  const [modules, setModules] = useState([
    { id: 1, name: 'Svetokorreksiya va foto bilan ishlash.' },
    { id: 2, name: 'PNG perexodlar + perexod turlari.' },
    { id: 3, name: 'Musiqa orqali videolar sifatini bir necha barobarga oshirish.' },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newModule, setNewModule] = useState('');

  const addModule = () => {
    setModules([...modules, { id: modules.length + 1, name: newModule }]);
    setNewModule('');
    setIsModalOpen(false);
  };
  const deleteModule = (id:any) => {
    setModules(modules.filter((module) => module.id !== id));
  };
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 flex justify-center items-center bg-gray-100">
      <div className="bg-white p-6 rounded-xl shadow-xl w-full max-w-md">
        <div className="flex justify-between items-center bg-gradient-to-r bg-[#25AFDC] text-white p-4 rounded-t-xl">
          <h1 className="text-xl font-bold">Modullar Ro'yxati</h1>
          <button className="text-2xl" onClick={() => setIsModalOpen(false)}>
            &times;
          </button>
        </div>
        <ul className="p-4 space-y-3">
          {modules.map((module) => (
            <li
              key={module.id}
              className="flex justify-between items-center border-b pb-2 last:border-none"
            >
              <span className="text-lg font-semibold text-gray-700">
                {module.id}. {module.name}
              </span>
              <div className="flex space-x-4">
                <button className="text-purple-500 hover:text-purple-700 ">
                  <i className="fas fa-pencil-alt"></i>
                </button>
                <button
                  className="text-red-500 hover:text-red-700 transition duration-200"
                  onClick={() => deleteModule(module.id)}
                >
                  <i className="fas fa-trash"></i>
                </button>
              </div>
            </li>
          ))}
        </ul>
        <button
          onClick={() => setIsModalOpen(true)}
          className="w-full bg-gradient-to-r bg-[#25AFDC] to-blue-500 text-white py-3 rounded-b-xl hover:bg-gradient-to-r hover:from-purple-600 hover:to-blue-600 "
        >
          + Modulga darsa qo'shish
        </button>
      </div>

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
                className="bg-gray-300 text-black px-4 py-2 rounded-lg hover:bg-gray-400 "
              >
                Bekor qilish
              </button>
              <button
                onClick={addModule}
                className=" from-purple-500 to-blue-500 text-white px-4 py-2 rounded-lg hover:bg-gradient-to-r hover:from-purple-600 hover:to-blue-600"
              >
                Qo'shish
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddModuls;
