import { useState } from "react";
import "../style/Navbar.css";
import navbar_logo from "../../assets/logo/Raiyan_Global_Logos.svg"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="Navbar">
      <div className="rightside">
        <a href="#/">
          <img src={navbar_logo} alt="Logo" />
        </a>
      </div>

      {/* HAMBURGER BUTTON (for mobile) */}
      <div className="menu-btn" onClick={() => setIsOpen(!isOpen)}>
        <span className={isOpen ? "open" : ""}></span>
        <span className={isOpen ? "open" : ""}></span>
        <span className={isOpen ? "open" : ""}></span>
      </div>

      {/* NAV LINKS */}
      <div className={`leftside ${isOpen ? "active" : ""}`}>
        <ul>
          <li onClick={() => setIsOpen(false)}><a href="#/">Home</a></li>
          <li onClick={() => setIsOpen(false)}><a href="#/about">About</a></li>
          <li onClick={() => setIsOpen(false)}><a href="#/products">Product</a></li>
          <li onClick={() => setIsOpen(false)}><a href="#/contact">Contact Us</a></li>
        </ul>
      </div>
    </nav>
  );
}
