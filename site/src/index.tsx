import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeProvider } from "@mui/material";
import estilo from "./estilo";

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);
root.render(
    <ThemeProvider theme={estilo}>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </ThemeProvider>
);
