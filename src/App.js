import React from "react";
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import Home from "./comps/home";
import './App.css';
import Footer from "./comps/footer";
import VodInput from "./comps/vodInput";
import MoviInfo from "./comps/moviInfo";

function App() {
  return (
    <BrowserRouter>
      <VodInput />
      <Routes>
        <Route index element={<Home />} />
        <Route  path="/home/:category" element={<Home />} />
        <Route  path="/info" element={<MoviInfo />} />
        <Route  path="/info/:id" element={<MoviInfo />} />
        
        <Route  path="/*" element={<h1>page not found,fail :(</h1>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
