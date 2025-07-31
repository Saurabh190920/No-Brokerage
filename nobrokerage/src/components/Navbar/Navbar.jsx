import React, { useEffect, useState } from "react";
import styles from "./Navbar.module.css";
import logo from "../../assets/CompanyLogo.png";
import { FaUser, FaBuilding, FaCaretDown } from "react-icons/fa";

const Navbar = () => {
  const [isSticky, setSticky] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    const handleScroll = () => {
      if (window.scrollY < lastScrollY) setSticky(true);
      else if (window.scrollY === 0) setSticky(false);
      lastScrollY = window.scrollY;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`${styles.navbar} ${isSticky ? styles.sticky : ""}`}>
      <div className={styles.leftSection}>
        <img src={logo} alt="Company Logo" className={styles.logo} />
        <span className={styles.country}>India</span>
        <select className={styles.citySelect} defaultValue="Mumbai">
          <option value="Mumbai">Mumbai</option>
          <option value="Pune">Pune</option>
        </select>
      </div>

      <div className={styles.rightSection}>
        <button className={styles.addPropertyBtn}>
          Add Property <span className={styles.freeText}>FREE</span>
        </button>

        {/* USER DROPDOWN */}
        <div className={styles.userDropdown}>
          <div className={styles.userTrigger}>
            <FaUser className={styles.userIcon} />
            <FaCaretDown className={styles.caretIcon} />
          </div>
          <ul className={styles.dropdownMenu}>
            <li>
              <FaUser className={styles.menuIcon} />
              <a href="#login">Login</a>
            </li>
            <li>
              <FaBuilding className={styles.menuIcon} />
              <a href="#builder-login">Builder Login</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
