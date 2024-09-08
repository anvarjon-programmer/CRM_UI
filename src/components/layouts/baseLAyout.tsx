import { Outlet } from 'react-router-dom'
import Header from '../header/Header'
const BaseLAyout = () => {
  return (
    <>
    <Header/>

<div>
    <Outlet/>
</div></>
  )
}

export default BaseLAyout