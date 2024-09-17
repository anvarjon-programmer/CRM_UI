import React from 'react'
import { Link } from 'react-router-dom'
import { FaInstagram } from "react-icons/fa6";
import { FaTelegram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import { FaPhoneVolume } from "react-icons/fa6";


const Footer = () => {
    const today = new Date();  // Hozirgi sanani oladi
  const year = today.getFullYear();  // Yilni oladi
  const month = today.getMonth() + 1;  // Oyini oladi (0 dan boshlanadi, shuning uchun +1 qilinadi)
  const day = today.getDate();  // Kunni oladi
  return (
    

<footer className="bg-white dark:bg-gray-900 mt-32">
    <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
              <a href="https://flowbite.com/" className="flex items-center">
              <img className='w-[90px]' src="https://static.tildacdn.one/tild3562-6566-4532-b264-383261343639/logo_1_copy.png" alt="" />
              </a>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-4">
              <div>
                  <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">asosiy menyular</h2>
                  <ul className="text-gray-500 dark:text-gray-400 font-medium">
                      <li className="mb-4">
                          <Link to={"https://rivojuz.uz/#rec716633318"} className="hover:underline">Bosh sahifa</Link>
                      </li>
                      <li className="mb-4">
                          <Link to={"https://rivojuz.uz/#rec734854378"} className=" hover:underline">Kurslar</Link>
                      </li>
                      <li>
                          <Link to={"https://t.me/RivojUz_konsultant"} className=" hover:underline">Bog'lanish</Link>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">kurslar</h2>
                  <ul className="text-gray-500 dark:text-gray-400 font-medium">
                      <li className="mb-4">
                          <Link to={"https://rivojuz.uz/target"} className="hover:underline ">Target</Link>
                      </li>
                      <li className='mb-4'>
                          <Link to={""} className="hover:underline">Grafik Dizayn</Link>
                      </li>
                      <li className='mb-4'>
                          <Link to={"https://rivojuz.uz/mobilografiya"} className="hover:underline">Mobilografiya</Link>
                      </li>
                      <li className='mb-4'>
                          <Link to={"https://rivojuz.uz/socialmediamarketing"} className="hover:underline">SMM</Link>
                      </li>
                  </ul>
              </div>

              <div>
                  <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">xizmatlar</h2>
                  <ul className="text-gray-500 dark:text-gray-400 font-medium">
                      <li className="mb-4">
                          <Link to={'https://t.me/RivojUz_konsultant'} className="hover:underline">MENEJERGA YOZISH</Link>
                      </li>
                      <li className="mb-4">
                          <Link to={'https://t.me/RivojUz_konsultant'} className="hover:underline">KONSULTATSIYA OLISH</Link>
                      </li>
                      <li>
                          <Link to={'#'} className="hover:underline">MANZIL</Link>
                      </li>
                  </ul>
              </div>

              <div>
                  <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">manzilimiz</h2>
                  <ul className="text-gray-500 dark:text-gray-400 font-medium max-w-[200px]">
                      <li className="mb-4">
                          <Link to={'#'} className="hover:underline">Manzil: Toshkent shahar, Chilonzor tumani, Qatortol ko'chasi 60 B</Link>
                      </li>
                      <li className="mb-4">
                          <Link to={'#'} className="hover:underline">Mo'ljal: Yoshlar kelajagimiz jamg'armasi binosi</Link>
                      </li>
                     
                  </ul>
              </div>

          </div>
      </div>
      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© {year}.{month}.{day}.
          </span>
          <div className="flex mt-4 sm:justify-center sm:mt-0">
              <Link to={"https://www.instagram.com/rivojuz.uz?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw%3D%3D"} className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                    <FaInstagram className='text-2xl'/>
                  <span className="sr-only">Instagram</span>
              </Link>
              <Link to={"https://t.me/rivojuz_uz"} className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                     <FaTelegram className='text-2xl'/>
                  <span className="sr-only">Telegram</span>
              </Link>
              <Link to={"https://www.youtube.com/@Rivojuz"} className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                     <FaYoutube className='text-2xl'/>
                  <span className="sr-only">YouTube</span>
              </Link>
              <Link to={'/'} className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                     <FaPhoneVolume className='text-2xl'/>
                  <span className="sr-only">Phone</span>
              </Link>
              {/* <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                  <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clip-rule="evenodd"/>
                  </svg>
                  <span className="sr-only">GitHub account</span>
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                  <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                </svg>
                  <span className="sr-only">Rivoj</span>
              </a> */}
          </div>
      </div>
    </div>
</footer>

  )
}

export default Footer
