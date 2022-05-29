import { Container } from "@mui/material";
import Cabecalho from "../../components/cabecalho";
import ModalConfirmacao from "../../components/modalAviso";
import TabelaPacientes from "./tabela";

const Inicio = () => {
    return (
        <>
            <Cabecalho></Cabecalho>
            <TabelaPacientes></TabelaPacientes>
            <ModalConfirmacao></ModalConfirmacao>
        </>
    );
};

export default Inicio;
