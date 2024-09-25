import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import { BrowserRouter } from "react-router-dom";
import {
  ChakraProvider,
  ColorModeScript,
  CSSReset,
  extendTheme,
  StyleFunctionProps
} from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: (props: StyleFunctionProps) => ({
      body: {
        fontFamily: "Moderustic, sans-serif",
        bg: props.colorMode === "dark" ? "black" : "white",
        color: props.colorMode === "dark" ? "whiteAlpha.900" : "gray.800"
      }
    })
  },
  config: {
    initialColorMode: "dark",
    useSystemColorMode: false
  }
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <ChakraProvider theme={theme}>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <CSSReset />
        <App />
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>
);
