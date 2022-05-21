import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Inicio from "./inicio";

const Rotas = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<Inicio />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Rotas;
