import React from "react";
import styles from "./PopularBuilders.module.css";
import { FiExternalLink } from "react-icons/fi";
import PopularImage1 from './../../../../assets/PopularImage1.png'
import PopularImage2 from './../../../../assets/PopularImage2.png'
import PopularImage3 from './../../../../assets/PopularImage3.png'

const builders = [
  {
    name: "ABC Constructions",
    image: PopularImage1,
    totalProjects: 12,
    link: "#"
  },
  {
    name: "Dream Homes Pvt Ltd",
    image: PopularImage2,
    totalProjects: 8,
    link: "#"
  },
  {
    name: "Skyline Builders",
    image: PopularImage3,
    totalProjects: 15,
    link: "#"
  }
];

const PopularBuilders = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Popular Builders</h2>
      <p className={styles.subtitle}>
        Choose your dream house by your dream builders
      </p>
      <div className={styles.line}></div>

      <div className={styles.boxContainer}>
        {builders.map((builder, index) => (
          <a
            key={index}
            href={builder.link}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.box}
          >
            <img src={builder.image} alt={builder.name} className={styles.image} />
            <div className={styles.boxContent}>
              <h3 className={styles.builderName}>
                {builder.name}
                <FiExternalLink className={styles.icon} />
              </h3>
              <p className={styles.totalProjects}>
                Total Projects: {builder.totalProjects}
              </p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default PopularBuilders;
