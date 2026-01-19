import { createRoot } from "react-dom/client";
import "./style.css"
import App from "./App";

const container = document.getElementById("app");
if (!container) {
 throw "oops";
}
const root = createRoot(container);
const renderHome = App;
root.render(renderHome());

