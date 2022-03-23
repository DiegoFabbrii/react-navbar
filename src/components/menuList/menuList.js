import React from "react";
import { Link } from "react-router-dom";
import style from "../../styles/MenuList.module.css";

function MenuList() {
    return (
        <ul className={style.menuList}>
            <li>
                <Link to="/">Home</Link>
            </li>

            <li>
                <Link to="/produtos">Produtos</Link>
            </li>

            <li>
                <Link to="/sobre">Sobre</Link>
            </li>

            <li>
                <Link to="/contatos">Contatos</Link>
            </li>
        </ul>
    );
}

export default MenuList;
