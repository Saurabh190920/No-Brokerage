import React from "react";
import styles from "./MoveInNow.module.css";

const boxData = [
  { title: "Under Construction", desc: "585+ Projects", bg: "#FFE7C8" },
  { title: "Ready To Move", desc: "602+ Projects", bg: "#D4E6FF" },
  { title: "Possession in 2025", desc: "216+ Projects", bg: "#D4FFE3" },
  { title: "Possession after 2025", desc: "219+ Projects", bg: "#FFB5B5" },
];

export default function MoveInNow() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Move In Now, Next Year Or Later</h1>
      <p className={styles.subtitle}>
        Projects based on your preferred possession date
      </p>
      <div className={styles.orangeLine}></div>
      <div className={styles.boxContainer}>
        {boxData.map((box, index) => (
          <div
            key={index}
            className={styles.box}
            style={{ backgroundColor: box.bg }}
          >
            <h3 className={styles.boxTitle}>{box.title}</h3>
            <p className={styles.boxDesc}>{box.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
