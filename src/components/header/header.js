import React, { useState } from "react";
import Navbar from "../navbar/navbar";
import BtnMenu from "../btnMenu/btnMenu";
import style from "../../styles/Header.module.css";

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const menuHandler = () => {
        setIsMenuOpen(!isMenuOpen);
        console.log("foi");
    };
    return (
        <header className={style.container}>
            <BtnMenu isMenuOpen={isMenuOpen} menuHandler={menuHandler} />
            <Navbar isMenuOpen={isMenuOpen} />
        </header>
    );
}

export default Header;
