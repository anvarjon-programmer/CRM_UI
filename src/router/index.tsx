import {  Route, Routes } from "react-router-dom"
import Home from '../page/home/Home'
import { LoginLayout } from "../components/layouts/login-layout"
import BaseLAyout from "../components/layouts/baseLAyout"
import  { Register } from "../page/Auth/Register/Register"
import { Login } from "../page/Auth/login/Login"
import Write from "../components/Write/Write"

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
              <Route path="/home" element={<Home/>}/> 
              {/* <Route path="write" element={<Write/>}/>   */}
          </Route>
        </Routes>
      </>
    )
  }

