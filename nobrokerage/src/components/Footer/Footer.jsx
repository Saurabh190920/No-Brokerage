import React from "react";
import styles from "./Footer.module.css";

const mumbaiAreas1 = [
  "Bandra East","Andheri West","Andheri East","Bandra West","Worli","Dadar","Lower Parel",
  "Juhu","Powai","Chembur","Vikhroli","Mulund","Goregaon","Borivali","Kandivali","Malad",
  "Colaba","Churchgate","Marine Drive","Charni Road","Girgaon","Mazgaon","Parel","Sion",
  "Matunga","Kurla"
];

const mumbaiAreas2 = [
  "Ghatkopar","Santacruz","Khar","Vile Parle","Chandivali","Versova","Marol","BKC","Chunabhatti",
  "Kalina","Byculla","Mazgaon","Cotton Green","Prabhadevi","Chinchpokli","Grant Road","Mahalaxmi",
  "Antop Hill","Reay Road","Nagpada","Agripada","Tardeo","Wadala","Mahim","Naigaon"
];

const mumbaiAreas3 = [
  "Mulund West","Mulund East","Dahisar","Jogeshwari","Oshiwara","Lokhandwala","Mira Road","Bhuleshwar",
  "Mandvi","Fort","Nariman Point","Ballard Estate","Cuffe Parade","Dongri","Kalbadevi","Princess Street",
  "Kamathipura","Masjid Bunder","Breach Candy","Malabar Hill","Walkeshwar","Tardeo","Opera House","Colaba Causeway",
  "Pedder Road","Altamount Road"
];

const mumbaiAreas4 = [
  "Vasai","Virar","Naigaon East","Naigaon West","Nalasopara","Palghar","Goregaon East","Goregaon West",
  "Jogeshwari East","Jogeshwari West","Kanjurmarg","Bhandup","Vidyavihar","Tilak Nagar","Matunga West",
  "Matunga East","Sewri","Cotton Green","Mazgaon Dock","Bhendi Bazaar","Sandhurst Road","Mumbai Central","Charni Road"
];

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <h2 className={styles.title}>New Projects in City</h2>
      <div className={styles.columns}>
        <div className={styles.column}>
          {mumbaiAreas1.map((area, index) => (
            <p key={index}>Flats for Sale in {area}</p>
          ))}
        </div>
        <div className={styles.column}>
          {mumbaiAreas2.map((area, index) => (
            <p key={index}>Flats for Sale in {area}</p>
          ))}
        </div>
        <div className={styles.column}>
          {mumbaiAreas3.map((area, index) => (
            <p key={index}>Flats for Sale in {area}</p>
          ))}
        </div>
        <div className={styles.column}>
          {mumbaiAreas4.map((area, index) => (
            <p key={index}>Flats for Sale in {area}</p>
          ))}
        </div>
      </div>
      <div className={styles.bottomBar}>
        <p>© 2022 NoBrokerage.com Designed By All Rights Reserved</p>
        <div className={styles.links}>
          <span>Glocal Tech Media</span>
          <span>About Us</span>
          <span>Contact Us</span>
          <span>Terms & Conditions</span>
          <span>Privacy Policy</span>
          <span>Blogs</span>
          <span>Careers</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
