import { useState } from "react";
import "./Navbar.css";
import logos from "../../assets/logo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="Navbar">
      <div className="rightside">
        <a href="/">
          <img src={logos} alt="Logo" />
        </a>
        <a href="/"><h2>Raiyan Global</h2></a>
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
          <li><a href="/">Home</a></li>
          <li><a href="/About">About</a></li>
          <li><a href="/Product">Product</a></li>
          <li><a href="/contact">Contact Us</a></li>
        </ul>
      </div>
    </nav>
  );
}
