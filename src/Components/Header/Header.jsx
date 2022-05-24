import React, { useContext, useEffect, useState } from "react";

import { isAuthContext } from "../../Context/Context";
import AuthBlock from "./AuthBlock/AuthBlock";
import LogoutBlock from "./LogoutBlock/LogoutBlock";
import Navbar from "./Navbar/Navbar";
import Clock from "./Clock/Clock";
import style from "./Header.module.css";

const Header = () => {
  const [isAuth, setIsAuth] = useContext(isAuthContext);
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    setInterval(() => setTime(new Date().toLocaleTimeString()), 1000);
  }, []);

  return (
    <header className={style.header}>
      {isAuth && (
        <>
          <Navbar />
          <div className={style.userBlock}>
            <Clock time={time} />
            <LogoutBlock setIsAuth={setIsAuth} />
          </div>
        </>
      )}

      {!isAuth && (
        <div className={style.authBlock}>
          <Clock time={time} />
          <AuthBlock />
        </div>
      )}
    </header>
  );
};

export default Header;
