// frontend/src/index.js
import React from "react";
import ReactDOM from "react-dom";
import App from "./App"; // Certifique-se de que está importando o App do front-end
import "./index.css"; // Se você tiver um arquivo CSS

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
