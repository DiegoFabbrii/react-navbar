import "./styles/Globals.module.css";
import { Routes, Route } from "react-router-dom";
import NavbarContextProvider from "./components/contexts/navbarContext";
import Header from "./components/header/header";
import Home from "./pages/home";
import Contatos from "./pages/contatos";
import Suporte from "./pages/suporte";
import Produtos from "./pages/produtos";
import Time from "./pages/time";

function App() {
    return (
        <NavbarContextProvider>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/produtos" element={<Produtos />} />
                <Route path="/suporte" element={<Suporte />} />
                <Route path="/contatos" element={<Contatos />} />
                <Route path="/time" element={<Time />} />
            </Routes>
        </NavbarContextProvider>
    );
}

export default App;
