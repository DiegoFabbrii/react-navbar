import React from "react";
import style from "../../styles/BtnMenu.module.css";

function BtnMenu({ isMenuOpen, menuHandler }) {
    return (
        <div className={style.container} onClick={() => menuHandler()}>
            <span
                className={`${style.btn} ${isMenuOpen ? style.menuOpen : ""}`}
            ></span>
        </div>
    );
}

export default BtnMenu;
