import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "./Routes/About";
import Contact from "./Routes/Contact";
import Home from "./Routes/Home";

function App() {
  return (
   <div className="App">
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Contact" element={<Contact/>} /> 
        <Route path="/About" element={<About/>} /> 
      </Routes>    
   </div>
  );
}

export default App;
