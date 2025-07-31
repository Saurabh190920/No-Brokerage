import React from "react";
import styles from "./WhyBrokerage.module.css";
import Freelist from "../../../../assets/Freelist.png";


const WhyBrokerage = () => {
  const reasons = [
    {
      image: Freelist,
      title: "Brokerage Free",
      desc: "Enjoy properties without any brokerage fees.",
    },
    {
      image: Freelist,
      title: "Free Listing",
      desc: "Post your property ads absolutely free.",
    },
    {
      image: Freelist,
      title: "Unlimited Access",
      desc: "Browse and connect with unlimited users freely.",
    },
    {
      image: Freelist,
      title: "Free Rent Agreement",
      desc: "Generate rent agreements online at no cost..",
    },
  ];

  return (
    <section className={styles.whySection}>
      <h2 className={styles.title}>Why Brokerage?</h2>
      <div className={styles.boxRow}>
        {reasons.map((item, index) => (
          <div key={index} className={styles.box}>
            <img src={item.image} alt={item.title} className={styles.icon} />
            <h3 className={styles.boxTitle}>{item.title}</h3>
            <p className={styles.boxDesc}>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyBrokerage;
