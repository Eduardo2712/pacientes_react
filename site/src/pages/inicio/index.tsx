import { Container } from "@mui/material";
import Cabecalho from "../../components/cabecalho";
import TabelaPacientes from "./tabela";

const Inicio = () => {
    return (
        <>
            <Cabecalho></Cabecalho>
            <Container maxWidth="lg">
                <TabelaPacientes></TabelaPacientes>
            </Container>
        </>
    );
};

export default Inicio;
