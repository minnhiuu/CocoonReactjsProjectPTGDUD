import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { BrowserRouter } from "react-router-dom";
import { CartProvider } from "./context/cart";
import "react-toastify/dist/ReactToastify.css";
import { AuthProvider } from "./context/auth.jsx";
import { ToastContainer } from "react-toastify";

createRoot(document.getElementById("root")).render(
  <>

    <BrowserRouter>
    <AuthProvider>
      <CartProvider>
      <ToastContainer/>
        <App />
      </CartProvider>
      </AuthProvider>
    </BrowserRouter>
  </>
);
