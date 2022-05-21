import { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Button, Container, Grid, TextField, Typography } from "@mui/material";
import { Pacientes } from "../../../interfaces";
import ModalConfirmacao from "../../../components/modalConfirmacao";
import { Link } from "react-router-dom";
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";

interface Props {
    id?: number;
}

const Formulario = (props: Props) => {
    const [modalAtivo, setModalAtivo] = useState<boolean>(false);
    const [paciente, setPaciente] = useState<Pacientes>();

    useEffect(() => {}, []);

    const esquema = Yup.object().shape({
        nome: Yup.string().required("Preencha esse campo!"),
        email: Yup.string().required("Preencha esse campo!"),
        data_nasc: Yup.string().required("Preencha esse campo!"),
        endereco: Yup.string().required("Preencha esse campo!"),
        numero: Yup.string().required("Preencha esse campo!"),
        bairro: Yup.string().required("Preencha esse campo!"),
        cidade: Yup.string().required("Preencha esse campo!"),
    });

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            nome: paciente?.nome ? paciente.nome : "",
            email: paciente?.email ? paciente.email : "",
            data_nasc: paciente?.data_nasc ? paciente.data_nasc : "",
            endereco: paciente?.endereco ? paciente.endereco : "",
            numero: paciente?.numero ? paciente.numero : "",
            bairro: paciente?.bairro ? paciente.bairro : "",
            cidade: paciente?.cidade ? paciente.cidade : "",
        },
        validationSchema: esquema,
        onSubmit: (values, { resetForm }) => {
            values.nome = values.nome.toUpperCase();
            values.email = values.email.toUpperCase();
            values.data_nasc = values.data_nasc.toUpperCase();
            values.endereco = values.endereco.toUpperCase();
            values.numero = values.numero;
            values.bairro = values.bairro.toUpperCase();
            values.cidade = values.cidade.toUpperCase();
            // Manda os dados para o backend
        },
    });
    return (
        <>
            <Typography
                align="center"
                variant="h4"
                component="div"
                sx={{ mt: 2 }}
            >
                Cadastro de pacientes
            </Typography>
            <form onSubmit={formik.handleSubmit} method="POST">
                <Grid container sx={{ mt: 0 }} spacing={6}>
                    <Grid item xs={6} className="bloco-campo">
                        <TextField
                            fullWidth
                            id="nome"
                            name="nome"
                            className="campo"
                            type="text"
                            label="NOME*"
                            InputLabelProps={{ shrink: true }}
                            inputProps={{
                                maxLength: 100,
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
                    <Grid item xs={6} className="bloco-campo">
                        <TextField
                            fullWidth
                            id="email"
                            name="email"
                            className="campo"
                            type="text"
                            label="E-MAIL*"
                            InputLabelProps={{ shrink: true }}
                            inputProps={{
                                maxLength: 100,
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
                        />
                    </Grid>
                    <Grid item xs={6} className="bloco-campo">
                        <TextField
                            fullWidth
                            id="data_nasc"
                            name="data_nasc"
                            className="campo"
                            type="date"
                            label="DATA NASCIMENTO*"
                            InputLabelProps={{ shrink: true }}
                            inputProps={{
                                maxLength: 100,
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
                    <Grid item xs={6} className="bloco-campo">
                        <TextField
                            fullWidth
                            id="endereco"
                            name="endereco"
                            className="campo"
                            type="text"
                            label="ENDEREÇO*"
                            InputLabelProps={{ shrink: true }}
                            inputProps={{
                                maxLength: 100,
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
                    <Grid item xs={6} className="bloco-campo">
                        <TextField
                            fullWidth
                            id="numero"
                            name="numero"
                            className="campo"
                            type="number"
                            label="NÚMERO*"
                            InputLabelProps={{ shrink: true }}
                            inputProps={{
                                maxLength: 100,
                                style: { textTransform: "uppercase" },
                            }}
                            value={formik.values.numero}
                            onChange={formik.handleChange}
                            error={
                                formik.touched.numero &&
                                Boolean(formik.errors.numero)
                            }
                            helperText={
                                formik.touched.numero && formik.errors.numero
                            }
                        />
                    </Grid>
                    <Grid item xs={6} className="bloco-campo">
                        <TextField
                            fullWidth
                            id="bairro"
                            name="bairro"
                            className="campo"
                            type="text"
                            label="BAIRRO*"
                            InputLabelProps={{ shrink: true }}
                            inputProps={{
                                maxLength: 100,
                                style: { textTransform: "uppercase" },
                            }}
                            value={formik.values.bairro}
                            onChange={formik.handleChange}
                            error={
                                formik.touched.bairro &&
                                Boolean(formik.errors.bairro)
                            }
                            helperText={
                                formik.touched.bairro && formik.errors.bairro
                            }
                        />
                    </Grid>
                    <Grid item xs={6} className="bloco-campo">
                        <TextField
                            fullWidth
                            id="cidade"
                            name="cidade"
                            className="campo"
                            type="text"
                            label="CIDADE*"
                            InputLabelProps={{ shrink: true }}
                            inputProps={{
                                maxLength: 100,
                                style: { textTransform: "uppercase" },
                            }}
                            value={formik.values.cidade}
                            onChange={formik.handleChange}
                            error={
                                formik.touched.cidade &&
                                Boolean(formik.errors.cidade)
                            }
                            helperText={
                                formik.touched.cidade && formik.errors.cidade
                            }
                        />
                    </Grid>
                </Grid>
                <Grid container spacing={2} mt={3}>
                    <Grid
                        container
                        direction="row"
                        justifyContent="space-between"
                        alignItems="center"
                    >
                        <Grid ml={6}>
                            <Link to={"/"}>
                                <KeyboardReturnIcon
                                    sx={{ width: 150, height: 40 }}
                                    style={{
                                        backgroundColor: "#1565c0",
                                        color: "#fff",
                                        borderRadius: "4px",
                                    }}
                                ></KeyboardReturnIcon>
                            </Link>
                        </Grid>
                        <Grid mr={6}>
                            <Button
                                sx={{ width: 150, height: 40 }}
                                type="submit"
                                variant="contained"
                            >
                                Enviar
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </form>
            <ModalConfirmacao
                ativo={modalAtivo}
                mensagem={"Dados salvos com sucesso"}
            ></ModalConfirmacao>
        </>
    );
};

export default Formulario;
