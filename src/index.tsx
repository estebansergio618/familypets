import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ReserverContextProvider } from "./context/ReserverContext";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ReserverContextProvider>
      <App />
    </ReserverContextProvider>
  </React.StrictMode>
);
