import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import LandingPage from "./pages/landing/index.jsx";
import Auth from "./pages/auth/index.jsx";
import "./assets/css/main.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <LandingPage />
    <Auth.LoginPage />
  </StrictMode>
);
