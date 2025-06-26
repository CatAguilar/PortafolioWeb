import {Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ArquiProyectos from "./pages/ArquiProyectos";
import FrontProyectos from "./pages/FrontProyectos";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/arquitectura" element={<ArquiProyectos />} />
        <Route path="/frontend" element={<FrontProyectos />} />
      </Routes>
    
    </>

  );
}

export default App;