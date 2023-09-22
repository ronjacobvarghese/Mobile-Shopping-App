import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import ProductsContextProvider from "./context/ProductsProvider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ProductsContextProvider>
      <App />
    </ProductsContextProvider>
  </React.StrictMode>
);
