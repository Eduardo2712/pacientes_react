import { Container } from "@mui/system";
import { useParams } from "react-router-dom";
import Cabecalho from "../../components/cabecalho";
import Formulario from "./formulario";

const Paciente = () => {
    const { id } = useParams<string>();

    return (
        <>
            <Cabecalho></Cabecalho>
            <Container maxWidth="lg">
                <Formulario id={Number(id)}></Formulario>
            </Container>
        </>
    );
};

export default Paciente;
