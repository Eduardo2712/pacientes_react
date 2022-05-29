import { useParams } from "react-router-dom";
import Cabecalho from "../../components/cabecalho";
import ModalConfirmacao from "../../components/modalAviso";
import Formulario from "./formulario";

const Paciente = () => {
    const { email } = useParams<string>();

    return (
        <>
            <Cabecalho></Cabecalho>
            <Formulario email={email}></Formulario>
            <ModalConfirmacao></ModalConfirmacao>
        </>
    );
};

export default Paciente;
