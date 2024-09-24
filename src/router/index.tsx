import {  Route, Routes } from "react-router-dom"
import Home from '../page/home/Home'
import { LoginLayout } from "../components/layouts/login-layout"
import BaseLAyout from "../components/layouts/baseLAyout"
import { Login } from "../page/Auth/login/Login"
import CreateLessonForm from "../page/CreateLessonForm/CreateLessonForm"
import Chat from "../page/chats/Chat"
import Notification from "../page/Notification/Notification"
import StudentProgress from "../components/table/Homeworks"
import DataGridDemo from "../components/table/TrashTable"
import CheckLossonDemo from "../page/checkLesson/CheckLesson"
import AddModuls from "../page/Module/AddModuls"
import Evaluation from "../page/evaluation/Evaluation"

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
              <Route path="createLessonForm" element={<CreateLessonForm/>}/>  
              <Route path="chat" element={<Chat/>}/> 
              <Route path="notification" element={<Notification/>}/> 
              <Route path="studentProgress" element={<StudentProgress/>}/>  
              <Route path="dataGridDemo" element={<DataGridDemo/>}/>  
              <Route path="checkLossonDemo" element={<CheckLossonDemo/>}/>  
              <Route path="addModuls" element={<AddModuls/>}/>  
              <Route path="/evaluation" element={<Evaluation/>}/>  
          </Route>
        </Routes>
      </>
    )
  }

