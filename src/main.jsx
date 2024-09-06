import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BgProvider } from "./context/BgContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BgProvider>
      <App />
    </BgProvider>
  </StrictMode>
);
