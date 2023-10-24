import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import ShowProduct from "./components/ShowProduct";
import AddToCart from "./components/AddToCart";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
     
      <NavBar />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/showproduct" element={<ShowProduct/>}/>
        <Route path="/addtocart" element={<AddToCart/>}/>
      </Routes>
    </>
  );
}

export default App;
