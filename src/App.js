import React, { useState } from 'react'
import {Routes, Route} from "react-router-dom";
import 'antd/dist/antd.css'

import Header from "./Components/Header/Header";
import RegPage from "./Components/pages/RegPage/RegPage";
import HomePage from "./Components/pages/HomePage/HomePage";
import LoginPage from "./Components/pages/LoginPage/LoginPage";
import UsersPage from "./Components/pages/UsersPage/UsersPage";
import RegSuccess from "./Components/pages/RegSuccess/RegSuccess";
import UserPage from "./Components/pages/UserPage/UserPage";
import WeatherPage from "./Components/pages/WeatherPage/WeatherPage";
import { isAuthContext } from './Context/Context'
import './App.css';

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
                  <Route path='/user/:id' element={<UserPage />}/>
                  <Route path='/weather' element={<WeatherPage />}/> 
                  <Route path='/success' element={ <RegSuccess /> } />
              </Routes>
          </div>
      </isAuthContext.Provider>
    );
}

export default App;
