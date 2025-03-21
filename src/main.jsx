import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/index.scss";
import AppRouter from "./components/AppRouter/AppRouter.jsx";


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppRouter/>
  </StrictMode>,
)
