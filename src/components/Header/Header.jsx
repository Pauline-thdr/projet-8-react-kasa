import { NavLink } from "react-router-dom";
import logoKasa from "../../assets/logoKasa.svg";
import "./header.css";

function Header() {
  return (
    <header>
        <img src={logoKasa} />
      <nav>
        <NavLink to="/">Accueil</NavLink>
        <NavLink to="/a-propos">A propos</NavLink>
      </nav>
    </header>
  );
}

export default Header;
