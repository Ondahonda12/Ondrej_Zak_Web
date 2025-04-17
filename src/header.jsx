import React from "react";
import "./header.css";
import DanteLogo from "./assets/800px-Portrait_de_Dante-1.jpg";

const Header = () => {
  return (
    <header id ="header" >
      <div className="logo-container">
        <img src={DanteLogo} alt="Logo" className="logo" />
        <div className="title">Ondřej Žák</div>
      </div>
      <div className="buttons">
      <a href="#home"><button className="login-button">O mně</button></a>
      <a href="#zivotopis"><button className="login-button">Životopis</button></a>
      <a href="#contact"><button className="login-button">Kontakty</button></a>
      </div>
    </header>
  );
};

export default Header;