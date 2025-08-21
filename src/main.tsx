import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"


import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";
import "./index.css"


ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
<Theme
  accentColor="blue"
  radius="large"
  style={{ fontFamily: "Montserrat, ui-sans-serif, system-ui, sans-serif" }}
>
  <App />
</Theme>

  </React.StrictMode>
);
