


import React from 'react';
import logo from "./logo.svg";
import {NavLink} from "react-router-dom";

function Navbar(props) {
  return (
      <div className={"w-[100%] h-auto z-10 absolute flex py-[40px]"}>
        <img src={logo} alt="logo" className={"ml-[100px]"}/>

        <div className={"py-[23px] gap-[55px] ml-[500px] text-[white] font-bold flex"}>
          <NavLink to="/">HOME</NavLink>
          <NavLink to="/about">ABOUT</NavLink>
          <NavLink to="/menu">MENU</NavLink>
          <NavLink to="/products">PRODUCTS</NavLink>
          <NavLink to="/news">NEWS</NavLink>
          <NavLink to="/locations">LOCATIONS</NavLink>
        </div>
      </div>);
}

export default Navbar;