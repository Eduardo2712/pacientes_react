import { createTheme } from "@mui/material/styles";

const estilo = createTheme({
    palette: {
        primary: {
            main: "#3d91ff",
        },
        secondary: {
            main: "#0044ff",
        },
        background: {
            default: "#cecece",
        },
        contrastThreshold: 3,
        tonalOffset: 0.2,
    },
    spacing: 8,
});

export default estilo;
