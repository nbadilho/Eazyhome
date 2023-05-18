import React from "react";
import { GlobalStyle } from "./styles/globalStyles";
import { RoutesMain as Routes } from "./routes/routes";
import { ThemeProvider } from "@mui/material";
import { theme } from "../src/theme";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


export function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Routes />
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </ThemeProvider>
  );
}
