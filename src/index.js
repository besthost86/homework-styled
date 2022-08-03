import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route} from "react-router-dom"

import App from "./App";
import {Dialog, Components} from "./components";

import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <React.StrictMode>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="components" element={<Components />}/>
          <Route path="dialog" element={<Dialog/>}/>
        </Route>
      </Routes>
    </React.StrictMode>
  </BrowserRouter>
);
