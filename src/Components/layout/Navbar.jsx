import { useState } from "react";
import { Link } from "react-router-dom";
import "../style/Navbar.css";
import navbar_logo from "../../assets/logo/Raiyan_Global_Logos.svg";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="Navbar">
      <div className="rightside">
        <Link to="/" onClick={() => setIsOpen(false)}>
          <img src={navbar_logo} alt="Logo" />
        </Link>
      </div>

      {/* HAMBURGER BUTTON */}
      <div className="menu-btn" onClick={() => setIsOpen(!isOpen)}>
        <span className={isOpen ? "open" : ""}></span>
        <span className={isOpen ? "open" : ""}></span>
        <span className={isOpen ? "open" : ""}></span>
      </div>

      {/* NAV LINKS */}
      <div className={`leftside ${isOpen ? "active" : ""}`}>
        <ul>
          <li onClick={() => setIsOpen(false)}>
            <Link to="/">Home</Link>
          </li>
          <li onClick={() => setIsOpen(false)}>
            <Link to="/about">About</Link>
          </li>
          <li onClick={() => setIsOpen(false)}>
            <Link to="/products">Product</Link>
          </li>
          <li onClick={() => setIsOpen(false)}>
            <Link to="/contact">Contact Us</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
