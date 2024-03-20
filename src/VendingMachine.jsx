import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import NavBar from "./NavBar";
import Home from "./Home";
import Coke from "./Coke";
import Doritos from "./Doritos";
import Oreos from "./Oreos";

const VendingMachine = ({ links }) => {
  return (
    <div>
      <BrowserRouter>
        <NavBar links={links}/>
        <Routes>
          <Route path="/coke" element={<Coke/>} />
          <Route path="/doritos" element={<Doritos/>} />
          <Route path="/oreos" element={<Oreos/>} />
          <Route path="/" element={<Home/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

VendingMachine.defaultProps = {
    links: [
        { id: "home", url: "", name: "Home" },
        { id: "coke", url: "coke", name: "Coca-Cola© Zero Sugar" },
        { id: "doritos", url: "doritos", name: "Doritos© Wasabi Tortilla Chips" },
        { id: "oreos", url: "oreos", name: "OREO© Cookies" }
    ]
};

export default VendingMachine;