import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { App } from "./App";
import { BooksContextProvider } from "./context/BooksContext";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BooksContextProvider>
      <App />
    </BooksContextProvider>
  </StrictMode>
);
