import React from "react";

import RecentActivities from "./RecentActivities";

function RecentActivitie() {
  const mainDiv = {
    display: "flex",
    flexDirection: "column",
    gap: "8px",
    marginLeft: "30.33px",
    marginRight: "16px",
    marginTop: "27.04px",
  };

  const a = {
    padding: "6.96px 0px 7.69px 14.33px",
    cursor: "pointer",
    display: "flex",
    flexDirection: "row",
    gap: "19.93px",
    border: "1px solid #E6E7E9",
    filter: "drop-shadow(0px 1px 5px rgba(0, 0, 0, 0.05))",
    borderRadius: "5px",
  };

  const cardContent = {
    display: "flex",
    flexDirection: "column",
    gap: "4px",
  };

  const h4 = {
    margin: "0px",
    lineHeight: "16px",
    width: "140px",
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "14px",
    color: "#2B2D42",
  };

  const p = {
    margin: "0px",
    lineHeight: "15px",
    width: "142px",
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "10px",
    color: "#2B2D42",
  };

  return (
    <div style={mainDiv}>
      {RecentActivities.map((item, index) => {
        return (
          <a key={index} style={a}>
            <img
              src={item.icon}
              style={{ width: "50px", height: "50px", alignSelf: "center" }}
            />
            <div style={cardContent}>
              <h4 style={h4}>{item.title}</h4>
              <p style={p}>{item.date}</p>
              <p style={p}>{item.cost}</p>
            </div>
          </a>
        );
      })}
    </div>
  );
}

export default RecentActivitie;
