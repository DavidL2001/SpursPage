import React, { useState } from "react";
import '../App.css'

const Navbar = ({ activeSection, scrollToSection}) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    return (
    <div className="navbar">
        <h2>SPURS</h2>
        <button className="menu-toggle" onClick={toggleMenu}>
            ☰
        </button>

        <nav className={isMenuOpen ? "nav-menu open" : "nav-menu"}>
            <li className={activeSection === "home" ? "active" : ""} onClick={() => scrollToSection("home")}>
                HOME
            </li>
            <li className={activeSection === "about" ? "active" : ""} onClick={() => scrollToSection("about")}>
                ABOUT
            </li>
            <li className={activeSection === "players" ? "active" : ""} onClick={() => scrollToSection("players")}>
                PLAYERS
            </li>
            <li className={activeSection === "trophies" ? "active" : ""} onClick={() => scrollToSection("trophies")}>
                TROPHIES
            </li>
            <li className={activeSection === "stadium" ? "active" : ""} onClick={() => scrollToSection("stadium")}>
                STADIUM
            </li>
        </nav>
    </div>
);
};

export default Navbar;