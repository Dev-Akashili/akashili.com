import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider, ColorModeProvider, CSSReset } from "@chakra-ui/react";
import { App } from "./App";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <ChakraProvider>
        <ColorModeProvider
          options={{
            useSystemColorMode: true
          }}
        >
          <CSSReset />
          <App />
        </ColorModeProvider>
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>
);
