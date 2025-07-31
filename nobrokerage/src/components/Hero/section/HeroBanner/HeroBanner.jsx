import React from "react";
import styles from "./HeroBanner.module.css";
import HeroImage from './../../../../assets/HeroImage.jpg'
import Residential from './../../../../assets/Residential.png'
import Commercial from './../../../../assets/Commercial.png'
import { FaSearch, FaChevronDown } from "react-icons/fa";

const HeroBanner = () => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.overlay}>
        <h1 className={styles.heading}>Welcome to nobrokerage.com</h1>
        <p className={styles.subheading}>A Registered Trademark - Trusted by Thousands</p>
        <p className={styles.description}>
          Let us help you find your perfect brokerage-free home
        </p>

        <div className={styles.imageRow}>
          <div className={styles.imageBox}>
            <img src={Residential} alt="Residential" />
            <p>Residential</p>
          </div>
          <div className={styles.imageBox}>
            <img src={Commercial} alt="Commercial" />
            <p>Commercial</p>
          </div>
        </div>

        <div className={styles.searchContainer}>
          <FaSearch className={styles.searchIcon} />
          <input
            type="text"
            placeholder="Search your location here...."
            className={styles.searchInput}
          />
        </div>

        <div className={styles.filtersRow}>
          <div className={styles.dropdown}>
            <span>Buy</span>
            <FaChevronDown />
          </div>
          <div className={styles.dropdown}>
            <span>Property Type</span>
            <FaChevronDown />
          </div>
          <div className={styles.dropdown}>
            <span>Budget</span>
            <FaChevronDown />
          </div>
          <button className={styles.searchButton}>Search</button>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
