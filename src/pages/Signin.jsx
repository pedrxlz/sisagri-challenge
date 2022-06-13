import React from "react";

import Header from "../components/Header";
import Login from "../components/Login";

import "../css/App.css";

export default (_) => (
  <div className="signin-page">
    <div className="shadow"></div>
    <Header />
    <h1 className="title">Tecnologia com soluções para o agronegócio</h1>
    <h2 className="subtitle">
      Facilitamos a adequação ás legislações referentes a rastreabilidade
      vegetal, garantido a segurança dos alimentos.
    </h2>
    <Login />
    <div className="icon-links">
      <a href="https://www.facebook.com/Sisagri/" className="facebook-icon"></a>
      <a
        href="https://www.instagram.com/sisagri/"
        className="instagram-icon"
      ></a>
      <a className="whatsapp-icon"></a>
    </div>
  </div>
);
