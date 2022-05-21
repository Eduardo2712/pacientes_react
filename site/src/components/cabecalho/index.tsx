import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

const Cabecalho = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Typography
                        align="center"
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1 }}
                    >
                        Pacientes
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Cabecalho;
