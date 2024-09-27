import { useEffect, useState } from "react"
import { db, app } from "../../firebase/firebase";
import { useCollection } from 'react-firebase-hooks/firestore';
import { getFirestore, collection, doc, setDoc, deleteDoc } from "firebase/firestore";
import axios from "axios";

const Chat = () => {
  const [value, setValue] = useState('');
  const [userInfo, setUserInfo] = useState({}) // userInfo state

  const [data] = useCollection(
    collection(getFirestore(app), 'userTable'),
    {
      snapshotListenOptions: { includeMetadataChanges: true },
    }
  );

  const [messages] = useCollection(
    collection(getFirestore(app), 'chat_rooms'),
    {
      snapshotListenOptions: { includeMetadataChanges: true },
    }
  );

  useEffect(() => {
    console.log(messages);
  })

  const handleSubmit = async () => {
    const slidersRef = doc(db, 'slider', `${new Date().getTime()}`);
    setValue('')

    // await setDoc(slidersRef, {
    //     title: sliderInp.title,
    //     desc: sliderInp.desc,
    //     imageUrl: sliderInp.imageUrl,
    // }, { merge: true });
  }

  // Foydalanuvchini tanlash uchun funksiya
  const handleUserClick = (user) => {
    setUserInfo(user); 
  }

  return (
    <section className="flex  w-full max-w-[1400px] m-auto bg-blue chats">
      <div className="w-[400px] bg-white  border-l-black">
        <div className="px-4">
          <input type="text" placeholder="Search" className="w-full px-3 py-3 bg-gray-300 outline-none rounded-lg" />
        </div>
        <ul className="px-4 mt-4 overflow-y-scroll chats">
          {data?.docs.map((item) => (
            <li
              key={item.id}
              className="flex items-center gap-3 text-xl mt-3 cursor-pointer"
              onClick={() => handleUserClick({
                avatar: item.data().avatar,
                name: item.data().name,
                surname: item.data().surname,
                phoneNumber: item.data().phoneNumber
              })} // onClick hodisasi bilan user ma'lumotlarini yozamiz
            >
              <img className="w-10 rounded-full h-10 " src={item.data().avatar} alt={item.data().avatar} />
              {item.data().name} {item.data().surname}
              <span className="bg-blue h-3 w-3 rounded-full ml-auto"></span>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex-1 chats ">
        <div className="">
          <div className="bg-white px-6 flex items-center justify-between w-full ">
            <div>
              <h3>{userInfo.name} {userInfo.surname}</h3> {/* userInfo state-dan foydalanuvchi ismi va familiyasini ko'rsatamiz */}
              <span className="text-[13px] text-gray-200 -mt-10">{userInfo.role }</span>
            </div>
            <img className=" rounded-full h-10 w-10" src={userInfo.avatar } alt="" />
          </div>

          <div className=" h-[480px] overflow-auto">
            {messages?.docs.map((item) => (
              <div key={item.id}>
                <p>{item.data().message}</p>
                {/* <p>{item.data().receiver_id}</p> */}
              </div>
            ))}
          </div>

          <div className="flex items-center border bg-white p-2">
            <span className="ml-2 text-gray-500">😊</span>
            <input type="text"
              value={value}
              onChange={e => setValue(e.target.value)}
              placeholder="Write your message..."
              className="flex-grow ml-2 p-2 outline-none bg-transparent text-gray-700 placeholder-gray-400" />
            <button className="ml-2 px-4 py-2 bg-blue-500 rounded-full hover:bg-blue-600 text-gray-600">
              Send
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Chat;
