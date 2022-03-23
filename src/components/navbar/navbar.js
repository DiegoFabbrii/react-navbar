import React, { useContext } from "react";
import { NavbarContext } from "../contexts/navbarContext";
import MenuList from "../menuList/menuList";
import style from "../../styles/Navbar.module.css";

function Navbar() {
    const { isMenuOpen } = useContext(NavbarContext);

    return (
        <nav className={`${style.navbar} ${isMenuOpen ? style.menuOpen : ""}`}>
            <MenuList />
        </nav>
    );
}

export default Navbar;
