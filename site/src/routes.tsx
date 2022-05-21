import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "./pages/inicio";
import Paciente from "./pages/paciente";

const Rotas = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<Inicio />} />
                <Route path={"/paciente/"} element={<Paciente />} />
                <Route path={"/paciente/:id"} element={<Paciente />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Rotas;
