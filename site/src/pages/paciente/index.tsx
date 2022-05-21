import { Container } from "@mui/system";
import Cabecalho from "../../components/cabecalho";
import Formulario from "./formulario";

interface Props {
    id?: number;
}

const Paciente = (props: Props) => {
    return (
        <>
            <Cabecalho></Cabecalho>
            <Container maxWidth="lg">
                <Formulario id={props.id}></Formulario>
            </Container>
        </>
    );
};

export default Paciente;
