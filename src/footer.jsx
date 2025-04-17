import React from "react";
import "./footer.css";
import Instagram from "./assets/Instagram.png";
import Facebook from "./assets/Facebook.png";
 

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <p>Webová stránka vytvořená v Reactu.</p>
          <p>Všechny práva vyhrazena &copy; {currentYear}</p>
        </div>

        <div className="footer-center">
            <a  href="https://www.instagram.com/dante.7zip/" target="_blank" rel="noreferrer">
            <img className="img1"  src={Instagram} />
            </a>
            <a chref="https://www.facebook.com/ondrej.zak.31" target="_blank" rel="noreferrer">
            <img className="img2" src={Facebook} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;