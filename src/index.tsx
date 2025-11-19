import React from "react";
import ReactDOM from "react-dom/client";
import App from "./pages/App";
import "./index.scss";

import { DeviceProvider } from "./Context/DeviceProvider";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  // remove strict mode later
  <React.StrictMode>
    <DeviceProvider>
      <App />
    </DeviceProvider>
  </React.StrictMode>
);