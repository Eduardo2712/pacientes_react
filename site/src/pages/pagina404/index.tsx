import { Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";
import { Link } from "react-router-dom";
import Cabecalho from "../../components/cabecalho";
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";

const Pagina404 = () => {
    return (
        <>
            <Cabecalho></Cabecalho>
            <Container maxWidth="xl">
                <Typography
                    align="center"
                    variant="h4"
                    component="div"
                    sx={{ mt: 4 }}
                >
                    Página não encontrada
                </Typography>
                <Grid mt={3}>
                    <Link title="Voltar" to={"/"}>
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
            </Container>
        </>
    );
};

export default Pagina404;
