import {  Route, Routes } from "react-router-dom"
import Home from '../page/home/Home'
import { LoginLayout } from "../components/layouts/login-layout"
import BaseLAyout from "../components/layouts/baseLAyout"
import { Login } from "../page/Auth/login/Login"
import CreateLessonForm from "../page/CreateLessonForm/CreateLessonForm"
import Chat from "../page/chats/Chat"
import Notification from "../page/Notification/Notification"
import StudentProgress from "../components/table/Homeworks"

  export const AuthRouter =() =>{
    return(
        <Routes>
          <Route path="/" element={<LoginLayout/>}>
                {/* <Route path="register" element={<Register/>}/> */}
                <Route path="login" element={<Login/>}/>
          </Route>
        </Routes>
    )
  }

  export const  BaseLayoutRouter = () =>{
    return(
      <>
        <Routes>
          <Route path='/' element={<BaseLAyout/>}>
              <Route path="/" element={<Home/>}/> 
              {/* <Route path="/createLessonForm" element={<CreateLessonForm/>}/>   */}
              <Route path="createLessonForm" element={<CreateLessonForm/>}/>  
              <Route path="chat" element={<Chat/>}/> 
              <Route path="notification" element={<Notification/>}/> 
              <Route path="studentProgress" element={<StudentProgress/>}/>  

          </Route>
        </Routes>
      </>
    )
  }

