import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import App from "./App.jsx";
console.log('main jsx');
const root = createRoot(document.getElementById("root"));
console.log(root);
root.render(
    <StrictMode>
        <App />
    </StrictMode>
);