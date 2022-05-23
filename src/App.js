import React from 'react'
import './App.css';
import Header from "./Components/Header/Header";
import {Routes, Route} from "react-router-dom";
import RegPage from "./Components/RegPage/RegPage";
import HomePage from "./Components/HomePage/HomePage";
import LoginPage from "./Components/LoginPage/LoginPage";
import {useState} from "react";
import { isAuthContext } from './Context/Context'
import UsersPage from "./Components/UsersPage/UsersPage";
import 'antd/dist/antd.css'
import RegSuccess from "./Components/RegPage/RegSuccess/RegSuccess";

function App() {

    const [isAuth, setIsAuth] = useState(localStorage.getItem('token') ? true : false);

  return(
      <isAuthContext.Provider value={[isAuth, setIsAuth]}>
          <Header />
          <div className='container'>
              <Routes>
                  <Route path='/home' element={ <HomePage /> }/>
                  <Route path='/register' element={ <RegPage /> } />
                  <Route path='/login' element={ <LoginPage /> }/>
                  <Route path='/users' element={ <UsersPage /> } />
                  <Route path='/success' element={ <RegSuccess /> } />
              </Routes>
          </div>
      </isAuthContext.Provider>
    );
}

export default App;
