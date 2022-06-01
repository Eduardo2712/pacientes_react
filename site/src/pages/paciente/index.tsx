import { useParams } from "react-router-dom";
import Cabecalho from "../../components/cabecalho";
import Modal from "../../components/modal";
import Formulario from "./formulario";

const Paciente = () => {
    const { email } = useParams<string>();

    return (
        <>
            <Cabecalho></Cabecalho>
            <Formulario email={email}></Formulario>
            <Modal></Modal>
        </>
    );
};

export default Paciente;
