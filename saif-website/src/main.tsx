import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./index.css";
import Header from "./Header";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <div className={"mainContainer"}>
      <div className={"content"}>
        <Header />
      </div>
    </div>
  </StrictMode>
);
