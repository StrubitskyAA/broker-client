import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import store from "./store";
import reportWebVitals from "./reportWebVitals";

import App from "./components/blocks/app";
import InfoAlert from "./components/elements/info/alert";

import "./index.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <InfoAlert />
      <App />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
