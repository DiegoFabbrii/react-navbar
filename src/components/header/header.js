import React from "react";
import Navbar from "../navbar/navbar";
import BtnMenu from "../btnMenu/btnMenu";
import style from "../../styles/Header.module.css";

function Header() {
    return (
        <header className={style.container}>
            <BtnMenu />
            <Navbar />
        </header>
    );
}

export default Header;
