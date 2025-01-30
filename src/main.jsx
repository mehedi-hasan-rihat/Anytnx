import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { BrowserRouter, Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";
import Services from "./pages/Services";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes  >
        <Route index element={<HomePage />} />
        <Route path="services" element={<Services />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
