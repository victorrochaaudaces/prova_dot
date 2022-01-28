import "./App.css";
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Index";
import Home from "./components/pages/Home";
import Search from './components/pages/Search'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search/:id" element={<Search />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
