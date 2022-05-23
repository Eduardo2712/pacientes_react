import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "./pages/inicio";
import Paciente from "./pages/paciente";
import Pagina404 from "./pages/pagina404";

const Rotas = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<Inicio />} />
                <Route path={"/paciente/"} element={<Paciente />} />
                <Route path={"/paciente/:id"} element={<Paciente />} />
                <Route path="*" element={<Pagina404 />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Rotas;
