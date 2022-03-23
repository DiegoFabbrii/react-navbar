import React, { createContext, useState } from "react";

export const NavbarContext = createContext();

function NavbarContextProvider({ children }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const menuHandler = () => setIsMenuOpen(!isMenuOpen);

    return (
        <NavbarContext.Provider value={{ isMenuOpen, menuHandler }}>
            {children}
        </NavbarContext.Provider>
    );
}

export default NavbarContextProvider;
