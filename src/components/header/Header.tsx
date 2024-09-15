import { Link, NavLink, useLocation } from 'react-router-dom';
import { BsMedium } from "react-icons/bs";
import { LiaEditSolid } from "react-icons/lia";
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { MdKeyboardArrowDown } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import './Header.scss';
import Search from '../Search/Search';
import { useState } from 'react';
import Modal from '../../utils/Modal';
import UserModal from './UserModal';

const Header = () => {
  const [modal,setModal] = useState(false);
  const [searchModal, setSearchModal] = useState(false);
  const { pathname } = useLocation();
  
  return (
    <header className='border-b border-gray-600 bg-white  mb-20 '>
         <div className="size h-[60px] flex items-center justify-between px-10 fixed z-50 right-0 left-0 bg-white border-b ">
            <div className='flex items-center gap-3 sm:gap-7'>
              
              <Link to='/'>
              <span className=''>
                <img className='w-[90px]' src="https://static.tildacdn.one/tild3562-6566-4532-b264-383261343639/logo_1_copy.png" alt="" />
              </span>
            </Link>
            <Search modal={searchModal} setModal={setSearchModal}/>
            </div>
            {/* right */}
            <div className='flex items-center gap-3 sm:gap-7'>
            <span onClick={() => setSearchModal(true)}
             className='flex sm:hidden text-3xl text-gray-300 cursor-pointer'>
                <CiSearch/>
              </span>
              {pathname === "/write" ? (
              <button className='btn !bg-green-700 !py-2'>
              Publish
            </button>) : (
              <>
                <Link to="/createLessonForm" className='hidden md:flex items-center gap-1 text-gray-500'>
                <span className='text-xl'>
                   Add Lesson
                </span>
                 </Link>
              </>
              )}
              <span className="text-3xl text-gray-500 cursor-pointer">
                <Link to={'/notification'}>
                   <IoMdNotificationsOutline />
                </Link>
              </span>
              <span className="text-3xl text-gray-500 cursor-pointer">
                <Link to={'/chat'}>
                   <IoChatbubbleEllipsesOutline />
                </Link>
              </span>
              <div className='flex items-center relative'>
                <img  onClick={() => setModal(true)}
                className='w-[2.3rem] h-[2.3rem] object-cover rounded-full cursor-pointer'
                src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" alt="" />
                <span className='text-gray-500 cursor-pointer'>
                  <MdKeyboardArrowDown/>
                </span>
                 <Modal modal={modal} setModal={setModal}>
                  <div className={`${
                  modal ? "visible opacity-100%" : "invisible opacity-0"
                } transition-all duration-100`}>
                    <UserModal/>
                  </div>
                 </Modal>
              </div>
            </div>
          </div>
    </header>
  )
}

export default Header