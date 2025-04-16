import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./main.css";

createRoot(document.getElementById("root")).render(
  <BrowserRouter basename="/blog">
    <App />
  </BrowserRouter>
);
