import React from "react";
import { Link } from "react-router-dom";
import "./header-style.css";
import DanteLogo from "./assets/800px-Portrait_de_Dante-1.jpg";

const Header = () => {
  return (
    <header>
      <div className="logo-container">
        <img src={DanteLogo} alt="Logo" className="logo" />
        <a className="title">Můj blog</a>
      </div>
      <div>
      <Link to="/"><button className="login-button">O mě</button></Link>
      <Link to="/contact"><button className="login-button">Kontakty</button></Link>
      </div>
    </header>
  );
};

export default Header;