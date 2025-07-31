import React from "react";
import styles from "./EasySteps.module.css";
import StepImage from "./../../../../assets/StepImage.png";

const steps = [
  {
    number: 1,
    icon: "📝",
    title: "Enter your basic details",
    desc: "Enter all details like locality name, amenities, photos, etc.",
    image: StepImage,
  },
  {
    number: 2,
    icon: "📞",
    title: "Get contacted by tenants/buyers",
    desc: "Interested buyers or tenants will contact you directly without brokers.",
    image: StepImage,
  },
  {
    number: 3,
    icon: "🤝",
    title: "Close the deal hassle‑free",
    desc: "Negotiate and finalize the deal directly with genuine parties.",
    image: StepImage,
  },
];

const EasySteps = () => {
  return (
    <div className={styles.container}>
      {/* Title */}
      <h2 className={styles.title}>
        Sell or Rent your property with ease on{" "}
        <span className={styles.highlight}>Nobrokerage.com</span> in 3 easy steps!
      </h2>

      {/* Steps */}
      <div className={styles.steps}>
        {steps.map((step, index) => (
          <div key={index} className={styles.stepBox}>
            <div className={styles.badge}>
              <span className={styles.stepNumber}>{step.number}</span>
              <span className={styles.icon}>{step.icon}</span>
               <h3 className={styles.stepTitle}>{step.title}</h3>
            </div>
           
            <p className={styles.stepDesc}>{step.desc}</p>
            <img src={step.image} alt={`Step ${step.number}`} className={styles.stepImage} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default EasySteps;
