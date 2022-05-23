import { Typography } from "@mui/material";
import { Container } from "@mui/system";
import Cabecalho from "../../components/cabecalho";

const Pagina404 = () => {
    return (
        <>
            <Cabecalho></Cabecalho>
            <Container maxWidth="lg">
                <Typography
                    align="center"
                    variant="h4"
                    component="div"
                    sx={{ mt: 4 }}
                >
                    Página não encontrada
                </Typography>
            </Container>
        </>
    );
};

export default Pagina404;
