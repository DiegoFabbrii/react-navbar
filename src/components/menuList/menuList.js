import React, { useContext } from "react";
import { NavbarContext } from "../contexts/navbarContext";
import { Link } from "react-router-dom";
import { navbarData } from "./navbarData";
import style from "../../styles/MenuList.module.css";

function MenuList() {
    const { menuHandler } = useContext(NavbarContext);

    return (
        <ul className={style.menuList} onClick={() => menuHandler()}>
            {navbarData.map((item, index) => {
                return (
                    <li key={index}>
                        <Link to={item.path} className={style.itemList}>
                            {item.icon}
                            {item.title}
                        </Link>
                    </li>
                );
            })}
        </ul>
    );
}

export default MenuList;
