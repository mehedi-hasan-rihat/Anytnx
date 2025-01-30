import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { BrowserRouter, Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";
import Service from "./pages/Service";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes  >
        <Route index element={<HomePage />} />
        <Route path="about" element={<Service />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
