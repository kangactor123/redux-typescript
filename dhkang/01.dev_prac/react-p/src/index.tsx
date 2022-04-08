import React from "react";
import App from "./App";
import * as ReactDOMClient from "react-dom/client";
import { Provider } from "react-redux";
import store from "./store";

const container = document.getElementById("root");
const root = ReactDOMClient.createRoot(container as HTMLElement);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
