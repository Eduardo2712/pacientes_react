import { Container } from "@mui/material";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Cabecalho from "../../components/cabecalho";
import ModalConfirmacao from "../../components/modalConfirmacao";
import TabelaPacientes from "./tabela";

const Inicio = () => {
    const [modalAtivo, setModalAtivo] = useState<boolean>(false);
    const [mensagemModal, setMensagemModal] = useState<string>("");
    const valoresModal = useSelector((state: any) => state.modal);

    return (
        <>
            <Cabecalho></Cabecalho>
            <Container maxWidth="lg">
                <TabelaPacientes></TabelaPacientes>
            </Container>
            <ModalConfirmacao
                ativo={valoresModal?.ativo ?? false}
                mensagem={valoresModal?.titulo ?? ""}
            ></ModalConfirmacao>
        </>
    );
};

export default Inicio;
