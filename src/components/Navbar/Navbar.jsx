import React from "react";

import Menuitems from "./MenuItems";

function Navbar() {
  const nav = {
    marginTop: "24px",
    display: "flex",
    flexDirection: "column",
    alignItems: "left",
    gap: "4px",
  };

  const a = {
    display: "flex",
    flexDirection: "row",
    gap: "12px",
    boxSizing: "border-box",
    paddingLeft: "7px",
    paddingTop: "10px",
    paddingBottom: "10px",
    width: "216px",
    height: "40px",
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "14px",
    lineHeight: "140%",
    letterSpacing: "-0.5px",
    color: "#FFFFFF",
    textDecoration: "none",
  };

  const img = {
    height: "24px",
    width: "24px",
  };

  return (
    <nav style={nav}>
      {Menuitems.map((item, index) => {
        return (
          <div key={index}>
            <a href={item.url} style={a}>
              <img style={img} src={item.icon} />
              <span>{item.title}</span>
            </a>
          </div>
        );
      })}
    </nav>
  );
}

export default Navbar;
