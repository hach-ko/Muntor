import { Link } from "react-router-dom";
// import { useState, useEffect } from "react"; // Commented out for now
import styles from "../components_styles/Header.module.css";
import logo from "../assets/logo.png"; // Import the logo

function Header() {
  // Commented out dark mode logic for now
  /*
  const [darkMode, setDarkMode] = useState(() => {
    const storedMode = localStorage.getItem("darkMode");
    return storedMode ? storedMode === "true" : true;
  });

  useEffect(() => {
    document.body.classList.toggle("dark-mode", darkMode);
    document.body.classList.toggle("light-mode", !darkMode);
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);
  */

  return (
    <header className={`${styles.header} ${styles.darkHeader}`}>
      {/* Logo and Text */}
      <div className={styles.logoContainer}>
        <img src={logo} alt="MUNTOR Logo" className={styles.logo} />
        <h1 className={styles.logoText}>MUNTOR</h1>
      </div>

      <nav className={styles.nav}>
        <Link className={`${styles.navLink} ${styles.darkNavLink}`} to="/">Home</Link>
        <Link className={`${styles.navLink} ${styles.darkNavLink}`} to="/pdfs">PDFs</Link>
        <Link className={`${styles.navLink} ${styles.darkNavLink}`} to="/podcasts">Podcasts</Link>
        <Link className={`${styles.navLink} ${styles.darkNavLink}`} to="/newsletter">Newsletter</Link>
        <Link className={`${styles.navLink} ${styles.darkNavLink}`} to="/videos">Videos & Affiliates</Link>
        <Link className={`${styles.navLink} ${styles.darkNavLink}`} to="/about">About</Link>

        {/* Dark Mode Toggle Button (Commented out for now) */}
        {/*
        <button
          className={`${styles.darkModeToggle} ${darkMode ? styles.lightModeButton : ""}`}
          onClick={() => setDarkMode((prevMode) => !prevMode)}
        >
          {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
        </button>
        */}
      </nav>
    </header>
  );
}

export default Header;