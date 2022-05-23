import React, { useContext } from 'react';
import style from './Header.module.css'
import AuthBlock from "./AuthBlock/AuthBlock";
import LogoutBlock from "./LogoutBlock/LogoutBlock";
import {isAuthContext} from "../../Context/Context";
import Navbar from "./Navbar/Navbar";

const Header = () => {

    const [isAuth, setIsAuth] = useContext(isAuthContext);

    return (
        <header className={style.header}>
            {isAuth &&
                <>
                    <Navbar />
                    <LogoutBlock setIsAuth={setIsAuth} />
                </>
            }
            {!isAuth && <AuthBlock />}
        </header>
    );
};

export default Header;