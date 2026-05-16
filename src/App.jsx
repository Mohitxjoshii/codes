import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Product from "./Components/Product";
import Service from "./Components/Service";
import Nav from "./Components/Nav";
import Mainrouts from "./routes/Mainrouts";


function App() {
  return (
    <div className="h-screen w-screen bg-gray-800 text-2xl font-thin  text-white px-[10%]">
      <Nav />
      <Mainrouts/>
    </div>
  );
}

export default App;
