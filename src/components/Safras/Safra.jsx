import React from "react";

import Safras from "./Safras";

const cardsContainer = {
  marginTop: "14px",
  display: "flex",
  flexDirection: "column",
  gap: "8px",
  marginBottom: "24px",
};

const card = {
  marginLeft: "20px",
  width: "309px",
  height: "51px",
  boxSizing: "border-box",
  padding: "6px 10px 7px 19px",
  display: "flex",
  flexDirection: "row",
  gap: "19.26px",
  border: "1px solid #E6E7E9",
  filter: "drop-shadow(0px 1px 5px rgba(0, 0, 0, 0.05))",
  borderRadius: "5px",
};

const cardIcon = {
  width: "38px",
  height: "38px",
};

const cardContent = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "left",
};

const h4 = {
  fontFamily: "Poppins",
  fontStyle: "normal",
  fontWeight: "500",
  fontSize: "14px",
  lineHeight: "21px",
  color: "#2B2D42",
};

const p = {
  fontFamily: "Poppins",
  fontStyle: "normal",
  fontWeight: "400",
  fontSize: "10px",
  lineHeight: "15px",
  color: "#2B2D42",
};

function Safra() {
  return (
    <div style={cardsContainer}>
      {Safras.map((item, index) => {
        return (
          <div key={index} style={card}>
            <img src={item.icon} style={cardIcon} />
            <div style={cardContent}>
              <h4 style={h4}>{item.title}</h4>
              <p style={p}>{item.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Safra;
