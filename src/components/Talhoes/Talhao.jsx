import React from "react";

import Talhoes from "./Talhoes";

const container = {
  marginTop: "17px",
  display: "flex",
  flexDirection: "column",
  margin: "0px 23px 0px 22px",
  gap: "12px",
};

const a = {
  width: "303px",
  height: "48px",
  display: "flex",
  flexDirection: "row",
  gap: "12px",
  boxSizing: "border-box",
  padding: "12px 0px 12px 13px",
  background: "#FFFFFF",
  border: "1px solid #E6E7E9",
  boxShadow: "0px 1px 4px rgba(0, 0, 0, 0.03)",
  borderRadius: "5px",
};

const img = {
  width: "24px",
  height: "24px",
};

function Talhao() {
  return (
    <div style={container}>
      {Talhoes.map((item, index) => {
        return (
          <a key={index} style={a}>
            <img src={item.key} style={img} />
            {item.title}
          </a>
        );
      })}
      <div></div>
    </div>
  );
}

export default Talhao;
