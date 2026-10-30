import { createRoot } from "react-dom/client";
import { StoreProvider } from "./providers/store";
import { AppRouter } from "./providers/router";
import "./styles/index.css";

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Root element not found");
}

createRoot(rootElement).render(
  <StoreProvider>
    <AppRouter />
  </StoreProvider>,
);
