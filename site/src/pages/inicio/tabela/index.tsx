import { DataGrid, GridColDef, GridRowsProp, ptBR } from "@mui/x-data-grid";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Box, Button, Container, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AddBoxIcon from "@mui/icons-material/AddBox";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import reduxModal from "../../../store/reduxModal/reduxModal.actions";
import { ReduxModal } from "../../../interfaces";
import Carregando from "../../../components/carregando";

const TabelaPacientes = () => {
    const tema = createTheme({}, ptBR);
    const [carregando, setCarregando] = useState<boolean>(true);
    const [linhas, setLinhas] = useState<GridRowsProp>([]);
    const valoresModal = useSelector((state: ReduxModal) => {
        return state;
    });
    const dispatch = useDispatch();

    useEffect(() => {
        axios
            .get(`${process.env.REACT_APP_URL_API}/pacientes`)
            .then((resposta) => {
                setLinhas(resposta.data.Items);
                setCarregando(false);
            })
            .catch((erro) => {
                console.error(`Erro ${erro}`);
                setCarregando(false);
            });
    }, []);

    const excluirPaciente = (id: string) => {
        axios
            .delete(`${process.env.REACT_APP_URL_API}/pacientes/${id}`)
            .then((resposta) => {
                dispatch(
                    reduxModal({
                        ativo: true,
                        titulo: "Paciente excluído com sucesso!",
                    })
                );
            })
            .catch((erro) => {
                console.error(`Erro ${erro}`);
            });
    };

    const colunas: GridColDef[] = [
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
                                onClick={() => {
                                    dispatch(
                                        reduxModal({
                                            ativo: true,
                                            titulo: "BATATA",
                                        })
                                    );
                                }}
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

    return (
        <>
            <Container maxWidth="xl">
                <Grid sx={{ mt: 4 }}>
                    <ThemeProvider theme={tema}>
                        {!carregando ? (
                            <DataGrid
                                getRowId={(colunas) => colunas.email}
                                style={{ height: 400 }}
                                rows={linhas}
                                columns={colunas}
                                pageSize={5}
                                rowsPerPageOptions={[5]}
                                disableSelectionOnClick
                            ></DataGrid>
                        ) : (
                            <Carregando></Carregando>
                        )}
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
            </Container>
        </>
    );
};

export default TabelaPacientes;
