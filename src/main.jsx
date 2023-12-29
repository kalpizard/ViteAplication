
import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App"; // Ajusta según la estructura de tu proyecto
import "./index.css"; // Ajusta según la estructura de tu proyecto

const root = document.getElementById("root");

// Reemplaza ReactDOM.render con createRoot().render
const rootElement = createRoot(root);
rootElement.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
