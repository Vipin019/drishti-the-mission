import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Container/Home/Home"
import About from "./Components/Container/About/About"
import Contact from "./Components/Container/Contact/Contact"
import Registration from "./Components/Container/Registration/Registration"
import RegistredSuccess from "./Components/AfterRegistration/RegistredSuccess";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/about" element={<About/>}/>
          <Route exact path="/contact" element={<Contact/>}/>
          <Route exact path="/registration" element={<Registration/>}/>
          <Route exact path="/registred-success" element={<RegistredSuccess/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
