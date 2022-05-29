import Cabecalho from "../../components/cabecalho";
import ModalAviso from "../../components/modalAviso";
import TabelaPacientes from "./tabela";

const Inicio = () => {
    return (
        <>
            <Cabecalho></Cabecalho>
            <TabelaPacientes></TabelaPacientes>
            <ModalAviso></ModalAviso>
        </>
    );
};

export default Inicio;
