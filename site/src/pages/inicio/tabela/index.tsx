import {
    DataGrid,
    GridColDef,
    GridRenderCellParams,
    GridRowsProp,
    ptBR,
} from "@mui/x-data-grid";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Box, Button, Grid } from "@mui/material";
import { useState } from "react";
import ModalConfirmacao from "../../../components/modalConfirmacao";
import { Link } from "react-router-dom";
import AddBoxIcon from "@mui/icons-material/AddBox";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

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
                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                gap: "1rem",
                            }}
                        >
                            <Button
                                type="button"
                                variant="contained"
                                style={{
                                    backgroundColor: "red",
                                }}
                                onClick={(e) => setModalAtivo(true)}
                            >
                                <DeleteIcon></DeleteIcon>
                            </Button>
                            <Link
                                style={{
                                    color: "white",
                                    backgroundColor: "purple",
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    padding: "6px 16px",
                                    borderRadius: "4px",
                                    fontSize: "0.875rem",
                                    fontWeight: "500",
                                    minWidth: "32px",
                                }}
                                to={`paciente/${linha.id}`}
                            >
                                <EditIcon></EditIcon>
                            </Link>
                        </Box>
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
            <Grid sx={{ mt: 4 }}>
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
            <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                <Link to={"/paciente"}>
                    <AddBoxIcon
                        style={{ color: "green", fontSize: "3.5rem" }}
                        titleAccess={"Adicionar paciente"}
                    ></AddBoxIcon>
                </Link>
            </Box>
            <ModalConfirmacao
                ativo={modalAtivo}
                mensagem={"Deseja realmente excluir esse paciente?"}
            ></ModalConfirmacao>
        </>
    );
};

export default TabelaPacientes;
