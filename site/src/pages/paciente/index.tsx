import { Container } from "@mui/system";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Cabecalho from "../../components/cabecalho";
import ModalConfirmacao from "../../components/modalConfirmacao";
import modal from "../../store/modal/modal.actions";
import Formulario from "./formulario";

const Paciente = () => {
    const { id } = useParams<string>();
    const valoresModal = useSelector((state: any) => state.modal);

    return (
        <>
            <Cabecalho></Cabecalho>
            <Container maxWidth="lg">
                <Formulario id={Number(id)}></Formulario>
            </Container>
            <ModalConfirmacao
                ativo={valoresModal.ativo ?? false}
                mensagem={valoresModal.titulo ?? ""}
            ></ModalConfirmacao>
        </>
    );
};

export default Paciente;
