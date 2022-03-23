import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const navbarData = [
    {
        title: "Home",
        path: "/",
        icon: <AiIcons.AiFillHome />,
    },

    {
        title: "Produtos",
        path: "/produtos",
        icon: <FaIcons.FaCartPlus />,
    },

    {
        title: "Time",
        path: "/time",
        icon: <IoIcons.IoMdPeople />,
    },

    {
        title: "Contatos",
        path: "/contatos",
        icon: <FaIcons.FaEnvelopeOpenText />,
    },

    {
        title: "Suporte",
        path: "/suporte",
        icon: <IoIcons.IoMdHelpCircle />,
    },
];
