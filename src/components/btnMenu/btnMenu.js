import React, { useContext } from "react";
import { NavbarContext } from "../contexts/navbarContext";
import style from "../../styles/BtnMenu.module.css";

function BtnMenu() {
    const { isMenuOpen, menuHandler } = useContext(NavbarContext);

    return (
        <div className={style.container} onClick={() => menuHandler()}>
            <span
                className={`${style.btn} ${isMenuOpen ? style.menuOpen : ""}`}
            ></span>
        </div>
    );
}

export default BtnMenu;
