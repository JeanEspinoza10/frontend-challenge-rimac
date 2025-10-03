import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@/Index.scss";
import App from "./App.tsx";
import { DataProvider } from "./components/provider/DataProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <DataProvider>
      <App />
    </DataProvider>
  </StrictMode>
);
