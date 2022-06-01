import { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Button, Container, Grid, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Items } from "../../../types";
import axios from "axios";
import { useDispatch } from "react-redux";
import { reduxModal } from "../../../store/reduxModal/reduxModal.actions";
import Carregando from "../../../components/carregando";

type Props = {
    email?: string;
};

const Formulario = (props: Props) => {
    const [carregando, setCarregando] = useState<boolean>(true);
    const [paciente, setPaciente] = useState<Items>();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        if (props.email) {
            axios
                .get(
                    `${process.env.REACT_APP_URL_API}/pacientes/${props.email}`
                )
                .then((resposta) => {
                    if (typeof resposta.data.Item !== "undefined") {
                        setPaciente(resposta.data.Item);
                        setCarregando(false);
                    } else {
                        navigate("/*");
                    }
                })
                .catch((erro) => {
                    console.error(`Erro ${erro}`);
                    setCarregando(false);
                });
        } else {
            setCarregando(false);
        }
    }, []);

    const esquema = Yup.object().shape({
        nome: Yup.string().required("Preencha esse campo!"),
        email: Yup.string()
            .email("Digite um e-mail válido")
            .required("Preencha esse campo!"),
        data_nasc: Yup.string().required("Preencha esse campo!"),
        endereco: Yup.string().required("Preencha esse campo!"),
        numero: Yup.number()
            .positive("Digite um número positivo")
            .required("Preencha esse campo!"),
        bairro: Yup.string().required("Preencha esse campo!"),
        cidade: Yup.string().required("Preencha esse campo!"),
    });

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            nome: paciente?.nome ? paciente.nome : "",
            email: paciente?.email ? paciente.email : "",
            data_nasc: paciente?.data_nasc
                ? `${paciente.data_nasc.split("/")[2]}-${
                      paciente.data_nasc.split("/")[1]
                  }-${paciente.data_nasc.split("/")[0]}`
                : "",
            endereco: paciente?.endereco ? paciente.endereco : "",
            numero: paciente?.numero ? paciente.numero : "",
            bairro: paciente?.bairro ? paciente.bairro : "",
            cidade: paciente?.cidade ? paciente.cidade : "",
        },
        validationSchema: esquema,
        onSubmit: (values, { resetForm }) => {
            values.nome = values.nome.toUpperCase();
            values.email = values.email.toUpperCase();
            values.data_nasc = `${values.data_nasc.split("-")[2]}/${
                values.data_nasc.split("-")[1]
            }/${values.data_nasc.split("-")[0]}`;
            values.endereco = values.endereco.toUpperCase();
            values.numero = values.numero;
            values.bairro = values.bairro.toUpperCase();
            values.cidade = values.cidade.toUpperCase();
            setCarregando(true);
            axios
                .put(`${process.env.REACT_APP_URL_API}/pacientes`, values)
                .then((resposta) => {
                    setCarregando(false);
                    dispatch(
                        reduxModal({
                            ativo: true,
                            titulo: props.email
                                ? "Paciente Atualizado com sucesso!"
                                : "Paciente cadastrado com sucesso!",
                        })
                    );
                    navigate("/");
                })
                .catch((erro) => {
                    dispatch(
                        reduxModal({
                            ativo: true,
                            titulo: "Erro na requisição!",
                        })
                    );
                    console.error(`Erro ${erro}`);
                    resetForm();
                });
        },
    });

    if (carregando) {
        return <Carregando></Carregando>;
    }

    return (
        <>
            <Typography
                align="center"
                variant="h4"
                component="div"
                sx={{ mt: 2 }}
            >
                {props.email ? "Edição de Paciente" : "Cadastro de Paciente"}
            </Typography>
            <Container maxWidth="xl">
                <form onSubmit={formik.handleSubmit} method="POST">
                    <Grid
                        container
                        sx={{
                            mt: 0,
                            justifyContent: "center",
                        }}
                        spacing={6}
                    >
                        <Grid item sm={6}>
                            <TextField
                                sx={{ minWidth: "270px" }}
                                fullWidth
                                id="nome"
                                name="nome"
                                type="text"
                                label="NOME*"
                                InputLabelProps={{ shrink: true }}
                                inputProps={{
                                    style: { textTransform: "uppercase" },
                                }}
                                value={formik.values.nome}
                                onChange={formik.handleChange}
                                error={
                                    formik.touched.nome &&
                                    Boolean(formik.errors.nome)
                                }
                                helperText={
                                    formik.touched.nome && formik.errors.nome
                                }
                            />
                        </Grid>
                        <Grid item sm={6}>
                            <TextField
                                sx={{ minWidth: "270px" }}
                                fullWidth
                                id="email"
                                name="email"
                                type="text"
                                label="E-MAIL*"
                                InputLabelProps={{ shrink: true }}
                                inputProps={{
                                    style: { textTransform: "uppercase" },
                                }}
                                value={formik.values.email}
                                onChange={formik.handleChange}
                                error={
                                    formik.touched.email &&
                                    Boolean(formik.errors.email)
                                }
                                helperText={
                                    formik.touched.email && formik.errors.email
                                }
                                disabled={props.email ? true : false}
                            />
                        </Grid>
                        <Grid item sm={6}>
                            <TextField
                                sx={{ minWidth: "270px" }}
                                fullWidth
                                id="data_nasc"
                                name="data_nasc"
                                type="date"
                                label="DATA DE NASCIMENTO*"
                                InputLabelProps={{ shrink: true }}
                                inputProps={{
                                    style: { textTransform: "uppercase" },
                                }}
                                value={formik.values.data_nasc}
                                onChange={formik.handleChange}
                                error={
                                    formik.touched.data_nasc &&
                                    Boolean(formik.errors.data_nasc)
                                }
                                helperText={
                                    formik.touched.data_nasc &&
                                    formik.errors.data_nasc
                                }
                            />
                        </Grid>
                        <Grid item sm={6}>
                            <TextField
                                sx={{ minWidth: "270px" }}
                                fullWidth
                                id="endereco"
                                name="endereco"
                                type="text"
                                label="ENDEREÇO*"
                                InputLabelProps={{ shrink: true }}
                                inputProps={{
                                    style: { textTransform: "uppercase" },
                                }}
                                value={formik.values.endereco}
                                onChange={formik.handleChange}
                                error={
                                    formik.touched.endereco &&
                                    Boolean(formik.errors.endereco)
                                }
                                helperText={
                                    formik.touched.endereco &&
                                    formik.errors.endereco
                                }
                            />
                        </Grid>
                        <Grid item sm={6}>
                            <TextField
                                sx={{ minWidth: "270px" }}
                                fullWidth
                                id="numero"
                                name="numero"
                                type="number"
                                label="NÚMERO*"
                                InputLabelProps={{ shrink: true }}
                                inputProps={{
                                    style: { textTransform: "uppercase" },
                                }}
                                value={formik.values.numero}
                                onChange={formik.handleChange}
                                error={
                                    formik.touched.numero &&
                                    Boolean(formik.errors.numero)
                                }
                                helperText={
                                    formik.touched.numero &&
                                    formik.errors.numero
                                }
                            />
                        </Grid>
                        <Grid item sm={6}>
                            <TextField
                                sx={{ minWidth: "270px" }}
                                fullWidth
                                id="bairro"
                                name="bairro"
                                type="text"
                                label="BAIRRO*"
                                InputLabelProps={{ shrink: true }}
                                inputProps={{
                                    style: { textTransform: "uppercase" },
                                }}
                                value={formik.values.bairro}
                                onChange={formik.handleChange}
                                error={
                                    formik.touched.bairro &&
                                    Boolean(formik.errors.bairro)
                                }
                                helperText={
                                    formik.touched.bairro &&
                                    formik.errors.bairro
                                }
                            />
                        </Grid>
                        <Grid item sm={6}>
                            <TextField
                                sx={{ minWidth: "270px" }}
                                fullWidth
                                id="cidade"
                                name="cidade"
                                type="text"
                                label="CIDADE*"
                                InputLabelProps={{ shrink: true }}
                                inputProps={{
                                    style: { textTransform: "uppercase" },
                                }}
                                value={formik.values.cidade}
                                onChange={formik.handleChange}
                                error={
                                    formik.touched.cidade &&
                                    Boolean(formik.errors.cidade)
                                }
                                helperText={
                                    formik.touched.cidade &&
                                    formik.errors.cidade
                                }
                            />
                        </Grid>
                    </Grid>
                    <Grid
                        mt={3}
                        mb={3}
                        container
                        direction="row"
                        justifyContent="space-between"
                        alignItems="center"
                    >
                        <Grid>
                            <Button
                                sx={{ width: 150, height: 40 }}
                                type="button"
                                onClick={() => navigate("/")}
                                variant="contained"
                            >
                                Voltar
                            </Button>
                        </Grid>
                        <Grid>
                            <Button
                                sx={{ width: 150, height: 40 }}
                                type="submit"
                                variant="contained"
                            >
                                Enviar
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Container>
        </>
    );
};

export default Formulario;
