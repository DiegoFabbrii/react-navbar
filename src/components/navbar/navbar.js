import React from "react";
import MenuList from "../menuList/menuList";
import style from "../../styles/Navbar.module.css";

function Navbar({ isMenuOpen }) {
    return (
        <nav className={`${style.navbar} ${isMenuOpen ? style.menuOpen : ""}`}>
            <MenuList />
        </nav>
    );
}

export default Navbar;
