import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ContextProvider } from "./context/ContextProvider.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./router/Router.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <ContextProvider>
        <Router />
      </ContextProvider>
    </BrowserRouter>
  </StrictMode>
);
