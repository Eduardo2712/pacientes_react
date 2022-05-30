import { DataGrid, GridColDef, GridRowsProp, ptBR } from "@mui/x-data-grid";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Box, Button, Container, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import AddBoxIcon from "@mui/icons-material/AddBox";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import axios from "axios";
import { useDispatch } from "react-redux";
import { reduxModal } from "../../../store/reduxModal/reduxModal.actions";
import Carregando from "../../../components/carregando";
import useSWR from "swr";

const TabelaPacientes = () => {
    const tema = createTheme({}, ptBR);
    const dispatch = useDispatch();
    const { data, error, mutate } = useSWR(
        `${process.env.REACT_APP_URL_API}/pacientes`,
        (url: string) => axios(url).then((resposta) => resposta.data)
    );

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
                mutate();
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
                                    excluirPaciente(linha.id.toString());
                                }}
                                title="Excluir paciente"
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
                                title="Editar paciente"
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

    if (!data) {
        return <Carregando></Carregando>;
    }

    if (error) {
        console.error(error);
    }

    return (
        <>
            <Container maxWidth="xl">
                <Grid sx={{ mt: 4 }}>
                    <ThemeProvider theme={tema}>
                        <DataGrid
                            getRowId={(colunas) => colunas.email}
                            style={{ height: 400 }}
                            rows={data.Items}
                            columns={colunas}
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
            </Container>
        </>
    );
};

export default TabelaPacientes;
