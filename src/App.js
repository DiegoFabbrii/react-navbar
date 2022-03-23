import "./styles/Globals.module.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/header/header";
import Home from "./pages/home";
import Contatos from "./pages/contatos";
import Sobre from "./pages/sobre";
import Produtos from "./pages/produtos";

function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/produtos" element={<Produtos />} />
                <Route path="/sobre" element={<Sobre />} />
                <Route path="/contatos" element={<Contatos />} />
            </Routes>
        </>
    );
}

export default App;
