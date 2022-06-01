import Cabecalho from "../../components/cabecalho";
import Modal from "../../components/modal";
import TabelaPacientes from "./tabela";

const Inicio = () => {
    return (
        <>
            <Cabecalho></Cabecalho>
            <TabelaPacientes></TabelaPacientes>
            <Modal></Modal>
        </>
    );
};

export default Inicio;
