import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Hamilton from "../Pages/Hamilton";
import logo from "./logo.svg";
import "../Styles/dist/styles.css";

function AppUI() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="Header">
          <a href="/">
            <img src={logo} className="App-logo" alt="logo" />
            <h1>Psychology Project</h1>
          </a>
        </header>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:name" element={<Hamilton />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export { AppUI };
