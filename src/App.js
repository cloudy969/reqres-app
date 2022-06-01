import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { QueryClient, QueryClientProvider } from "react-query";
import "antd/dist/antd.css";

import store from "./redux/store";
import Header from "./Components/Header/Header";
import RegPage from "./Components/pages/RegPage/RegPage";
import HomePage from "./Components/pages/HomePage/HomePage";
import LoginPage from "./Components/pages/LoginPage/LoginPage";
import UsersPage from "./Components/pages/UsersPage/UsersPage";
import RegSuccess from "./Components/pages/RegSuccess/RegSuccess";
import UserPage from "./Components/pages/UserPage/UserPage";
import WeatherPage from "./Components/pages/WeatherPage/WeatherPage";
import Calculator from "./Components/pages/Calculator/Calculator";
import UsersPageRQ from "./Components/pages/UsersPageRQ/UsersPageRQ";
import { isAuthContext } from "./Context/Context";
import "./App.css";
import {ReactQueryDevtools} from "react-query/devtools";
import UserPageRQ from "./Components/pages/UserPageRQ/UserPageRQ";
import WeatherPageRQ from "./Components/pages/WeatherPageRQ/WeatherPageRQ";
import CalculatorRHF from "./Components/pages/CalculatorRHF/Calculator/CalculatorRHF";
import Timer from "./Components/pages/Timer/Timer";

function App() {
  const [isAuth, setIsAuth] = useState(
    localStorage.getItem("token") ? true : false
  );
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <isAuthContext.Provider value={[isAuth, setIsAuth]}>
          <Header />
          <div className="container">
            <Routes>
              <Route path="/home" element={<HomePage />} />
              <Route path="/register" element={<RegPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/users" element={<UsersPage />} />
              <Route path="/user/:id" element={<UserPage />} />
              <Route path="/weather" element={<WeatherPage />} />
              <Route path="/success" element={<RegSuccess />} />
              <Route path="/calc" element={<Calculator />} />
              <Route path="/usersRQ" element={<UsersPageRQ />} />
              <Route path="/userRQ/:id" element={<UserPageRQ />} />
              <Route path="/weatherRQ" element={<WeatherPageRQ />} />
              <Route path="/calcRHF" element={<CalculatorRHF />} />
              <Route path='/timer' element={<Timer />} />
            </Routes>
          </div>
        </isAuthContext.Provider>
      </Provider>
    </QueryClientProvider>
  );
}

export default App;
