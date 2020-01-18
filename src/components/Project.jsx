import React from "react";
import styles from "../styles/Project.module.scss";

export default function Project({ name, time, link, technicalStack, description }) {
  return (
    <div className={styles.workProject}>
      <a href={link} className={styles.name}>{name}</a>
      <p className={styles.time}>{time}</p>
      <p className={styles.description}>{description}</p>
    </div>
  );
}
