import {
    DataGrid,
    GridColDef,
    GridRenderCellParams,
    GridRowsProp,
    ptBR,
} from "@mui/x-data-grid";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Grid } from "@mui/material";
import { useState } from "react";
import ModalConfirmacao from "../../../components/modalConfirmacao";
import { Link } from "react-router-dom";

const TabelaPacientes = () => {
    const tema = createTheme({}, ptBR);
    const [modalAtivo, setModalAtivo] = useState<boolean>(false);

    const columns: GridColDef[] = [
        {
            field: "Ação",
            width: 200,
            headerClassName: "cabecalho-tabela",
            renderCell: (linha) => {
                return (
                    <>
                        <Link
                            className="botao-editar"
                            to={`pacientes/${linha.id}`}
                        >
                            Editar
                        </Link>
                        <button
                            type="button"
                            className="botao-excluir"
                            // onClick={(e) => mostrarModal(linha)}
                        >
                            Excluir
                        </button>
                    </>
                );
            },
        },
        {
            field: "nome",
            headerName: "Paciente",
            width: 250,
            headerClassName: "cabecalho-tabela",
            description: "Paciente",
        },
        {
            field: "data_nasc",
            headerName: "Data de nascimento",
            width: 200,
            headerClassName: "cabecalho-tabela",
            description: "Data de nascimento",
        },
        {
            field: "email",
            headerName: "E-mail",
            width: 230,
            headerClassName: "cabecalho-tabela",
            description: "E-mail",
        },
        {
            field: "endereco",
            headerName: "Endereço",
            width: 300,
            headerClassName: "cabecalho-tabela",
            description: "Endereço",
        },
        {
            field: "numero",
            headerName: "Nº",
            width: 100,
            headerClassName: "cabecalho-tabela",
            description: "Número",
        },
        {
            field: "bairro",
            headerName: "Bairro",
            width: 150,
            headerClassName: "cabecalho-tabela",
            description: "Bairro",
        },
        {
            field: "cidade",
            headerName: "Cidade",
            width: 150,
            headerClassName: "cabecalho-tabela",
            description: "Cidade",
        },
    ];

    const rows: GridRowsProp = [
        {
            id: 1,
            nome: "João",
            data_nasc: "01/01/2000",
            email: "",
            endereco: "",
            numero: "",
            bairro: "",
            cidade: "",
        },
    ];

    return (
        <>
            <Grid className="tabela" sx={{ mt: 4 }}>
                <ThemeProvider theme={tema}>
                    <DataGrid
                        style={{ height: 300 }}
                        rows={rows}
                        columns={columns}
                        pageSize={5}
                        rowsPerPageOptions={[5]}
                        disableSelectionOnClick
                    ></DataGrid>
                </ThemeProvider>
            </Grid>
            <Link to="#">Link</Link>
            <ModalConfirmacao ativo={modalAtivo}></ModalConfirmacao>
        </>
    );
};

export default TabelaPacientes;
