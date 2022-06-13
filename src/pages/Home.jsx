import React from "react";
import logo from "../assets/Group 20.png";

import dropdownButton from "../assets/dropdown-icon.png";
import seachIcon from "../assets/search-icon.png";
import facebookIcon from "../assets/green-facebook-icon.png";
import instagramIcon from "../assets/green-instagram-icon.png";
import whatsappIcon from "../assets/green-whatsapp-icon.png";
import arrowRight from "../assets/keyboard-arrow-right.png";
import settingsIcon from "../assets/settings-icon.png";
import logoutIcon from "../assets/logout-icon.png";

import graph from "../assets/graph.png";

import Navbar from "../components/Navbar/Navbar";
import RecentActivitie from "../components/RecentActivitie/RecentActivitie";
import Talhao from "../components/Talhoes/Talhao";
import Safra from "../components/Safras/Safra";
import "../css/Home.css";

function Home() {
  return (
    <div class="home">
      <div className="menu">
        <img src={logo} alt="logo" />
        <hr className="navbar" />
        <div className="account-dropdown">
          <div>
            <span className="company">Lagos Agropecuaria LTDA</span>
            <span className="cnpj">12.345.678/0001-23</span>
          </div>
          <img src={dropdownButton} />
        </div>
        <Navbar />
        <hr className="settings" />
        <div className="settings">
          <a className="settings" href="#">
            <img src={settingsIcon} />
            <span>Configurações</span>
          </a>
          <a className="logout" href="/">
            <img src={logoutIcon} />
            <span>Sair da conta</span>
          </a>
        </div>
      </div>
      <div className="dashboard">
        <div className="header">
          <h3>Olá</h3>
          <div className="search-bar">
            <img src={seachIcon} />
            <input placeholder="Faça uma pesquisa" />
          </div>
          <div className="icons">
            <a>
              <img src={facebookIcon} />
            </a>
            <a>
              <img src={instagramIcon} />
            </a>
            <a>
              <img src={whatsappIcon} />
            </a>
          </div>
        </div>
        <div className="graph">
          <img src={graph} />
        </div>
        <div className="recent-activities">
          <h3>Atividades recentes</h3>
          <RecentActivitie />
          <div className="divider"></div>
          <a className="see-all">
            Ver todos <img src={arrowRight} />
          </a>
        </div>
        <div className="talhoes">
          <h3>Talhoes</h3>
          <span>Mais utilizados</span>
          <Talhao />
          <div className="divider"></div>
          <a className="see-all">
            Ver todos <img src={arrowRight} />
          </a>
        </div>
        <div className="safras">
          <h3>Safras</h3>
          <span>Acessados recentemente</span>
          <Safra />
          <div className="divider"></div>
          <a className="see-all">
            Ver todos <img src={arrowRight} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
