import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import App from "./App.tsx";

import "./index.css";

//explane about imports: import Chakra provider add it after React import statements.
//First we import stuff from React, then third party libraries, and finally our own import statements. then chakra,...

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
