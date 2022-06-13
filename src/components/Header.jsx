import React from "react";
import logo from "../assets/Group 20.png";

function Header() {
  const mystyle = {
    position: "absolute",
    width: "395px",
    height: "183.87px",
    left: "124px",
    top: "69px",
  };
  return <img src={logo} alt="Logo" style={mystyle} />;
}

export default Header;
