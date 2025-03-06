import { NavLink } from "react-router-dom";
import styles from "./Header.module.scss";
import logo from "../../assets/logo.png";

function Header() {
  return (
    <div className={styles.navbarre}>
      <img src={logo} alt="logo" />
      <nav className={styles.navLinks}>
        <NavLink to="/" className={({ isActive }) => (isActive ? styles.active : styles.navLink)}>
          Accueil
        </NavLink>
        <NavLink to="/about" className={({ isActive }) => (isActive ? styles.active : styles.navLink)}>
          A Propos
        </NavLink>
      </nav>
    </div>
  );
}

export default Header;
