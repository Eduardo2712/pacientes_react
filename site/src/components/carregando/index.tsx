import { Box, CircularProgress } from "@mui/material";

const Carregando = () => {
    return (
        <Box
            sx={{
                mt: 4,
                display: "flex",
                justifyContent: "center",
            }}
        >
            <CircularProgress />
        </Box>
    );
};

export default Carregando;
