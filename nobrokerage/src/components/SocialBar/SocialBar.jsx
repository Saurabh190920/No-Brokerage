import React from "react";
import styles from "./SocialBar.module.css";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn, FaPinterestP } from "react-icons/fa";

const socialLinks = [
  { icon: <FaFacebookF />, label: "Facebook", url: "https://facebook.com" },
  { icon: <FaInstagram />, label: "Instagram", url: "https://instagram.com" },
  { icon: <FaTwitter />, label: "Twitter", url: "https://twitter.com" },
  { icon: <FaLinkedinIn />, label: "LinkedIn", url: "https://linkedin.com" },
  { icon: <FaPinterestP />, label: "Pinterest", url: "https://pinterest.com" },
];

const SocialBar = () => {
  return (
    <div className={styles.socialBar}>
      {socialLinks.map((item, index) => (
        <a 
          key={index} 
          href={item.url} 
          target="_blank" 
          rel="noopener noreferrer"
          className={styles.iconContainer}
        >
          <span className={styles.icon}>{item.icon}</span>
          <span className={styles.label}>{item.label}</span>
        </a>
      ))}
    </div>
  );
};

export default SocialBar;
