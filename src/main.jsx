import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import LandingPage from "./pages/landing/index.jsx";
import Auth from "./pages/auth/index.jsx";
import "./assets/css/main.css";
import { Flowbite } from "flowbite-react";
import "@fortawesome/fontawesome-free/css/all.min.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Flowbite>
      <LandingPage />
      <Auth.LoginPage />
    </Flowbite>
  </StrictMode>
);
