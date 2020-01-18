import React from "react";
import styles from "../styles/Activity.module.scss";

export default function Activity({ time, name, position, description }) {
  return (
    <div className={styles.activity}>
      <p className={styles.name}>{name}</p>
      <span className={styles.time}>{time} | </span>
      <span className={styles.position}>{position}</span>
      <p className={styles.description}>{description}</p>
    </div>
  );
}
