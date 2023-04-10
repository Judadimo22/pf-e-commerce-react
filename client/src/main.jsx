import React from "react";
import ReactDOM from "react-dom/client";
import { Auth0Provider } from "@auth0/auth0-react";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import store from "../src/redux/store/index";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { lightTheme } from "./themes/light-theme";
import { Provider } from "react-redux";
import axios from "axios";
import { ChakraProvider } from '@chakra-ui/react'


ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <ThemeProvider theme={lightTheme}>
      <CssBaseline />
      <React.StrictMode>
        <Auth0Provider
          domain="dev-05o0jj0rko2ty63h.us.auth0.com"
          clientId="xcBeyYqKJ7bYItFfWKmMmFI8v1lkcTbQ"
          authorizationParams={{
            redirect_uri: window.location.origin,
          }}
        >
          <BrowserRouter>
          <ChakraProvider>
            <App />
  </ChakraProvider>
          </BrowserRouter>
        </Auth0Provider>
      </React.StrictMode>
    </ThemeProvider>
  </Provider>
);
