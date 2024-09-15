import { useEffect, useState } from 'react';
import './App.css'
import { AuthRouter, BaseLayoutRouter, } from './router';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { message } from 'antd';
import { login, logout } from './redux/store/auth-slice';

export const App = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isAuth } = useSelector((state: any) => state.auth);
  const [loading, setLoading] = useState(false);
  const getUser = async () => {
      try {
          setLoading(true);
          if (localStorage.getItem("accessToken")) {
              dispatch(login())
          } else {
              navigate('/login');
          }
          setLoading(false);
      } 
      catch (err: any) {
          message.error(err);
        //   navigate('/login');
        //   dispatch(logout());
          setLoading(false)
      } finally {
          setLoading(false)
      }
  }
  useEffect(() => {
      getUser()
  }, [])


  return (
    isAuth ? <BaseLayoutRouter/> : <AuthRouter/>
  );
}

export default App;
