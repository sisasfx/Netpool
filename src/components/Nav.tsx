import "../styles/nav.css";
import { useState } from "react";

function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="nav-bar" aria-label="Navegació principal">
      <a href="#inici" className="nav-logo-link" onClick={closeMenu}>
        <img className="img-container" src="/logo.jpeg" alt="Logo de Netpool" />
      </a>

      <button
        className="menu-hamburger"
        onClick={toggleMenu}
        aria-expanded={isMenuOpen}
        aria-controls="main-navigation"
        aria-label={isMenuOpen ? "Tancar menú" : "Obrir menú"}
        type="button"
      >
        &#9776;
      </button>

      <ul
        id="main-navigation"
        className={`nav-list ${isMenuOpen ? "open" : ""}`}
      >
        <li className="nav-item">
          <a className="nav-link" href="#inici" onClick={closeMenu}>
            INICI
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#serveis" onClick={closeMenu}>
            SERVEIS
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#quisom" onClick={closeMenu}>
            NOSALTRES
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#footer" onClick={closeMenu}>
            CONTACTE
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
