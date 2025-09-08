import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import { Store } from "./components/Store"; 

const root = ReactDOM.createRoot(document.getElementById("root"));

// Wrap App with Provider to connect Redux store
root.render(
  <Provider store={Store}>
    <App />
  </Provider>
);
