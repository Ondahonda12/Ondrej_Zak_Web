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
          <h3>DanteDev</h3>
          <p>Moderní webové aplikace s důrazem na kvalitu a funkčnost.</p>
        </div>

      <div className="footer-center">
          <a href="https://www.instagram.com/dante.7zip/" target="_blank" rel="noreferrer">
          <img  src={Instagram} />
          </a>
          <a href="https://www.facebook.com/ondrej.zak.31" target="_blank" rel="noreferrer">
          <img  src={Facebook} />
        </a>
      </div>
       
        <div className="footer-right">
          <p>&copy; {currentYear} DanteDev. Všechna práva vyhrazena.</p>
          <p>Vytvořeno s ❤️ v Reactu.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;