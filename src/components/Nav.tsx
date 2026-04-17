import "../styles/nav.css";
import { useState } from "react";

function Nav() {
  //jsx
  // Estado para manejar la visibilidad del menú
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Función para alternar la visibilidad del menú
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <nav className="nav-bar">
      <img className="img-container" src="/logo.jpeg" />
      <div className="menu-hamburger" onClick={toggleMenu}>
        &#9776;
      </div>
      <ul className={`nav-list ${isMenuOpen ? "open" : ""}`}>
        <li>
          <a href="#inici">INICI</a>
        </li>
        <li>
          <a href="#serveis">SERVEIS</a>
        </li>
        <li>
          <a href="#quisom">NOSALTRES</a>
        </li>
        <li>
          <a href="#footer">CONTACTE</a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
