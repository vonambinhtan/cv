import React from "react";
import styles from "../styles/WorkExperience.module.scss";

export default function WorkExperience({ time, companyName, projects }) {
  return (
    <div className={styles.workExperience}>
      <div className={styles.company}>
        <span className={styles.companyName}>{companyName}</span>

        <span className={styles.time}>({time})</span>
      </div>
      {projects.map((project, i) => (
        <div className={styles.project}>
          <span className={styles.name}>{project.name}</span> 
          <span> - </span>
          <span className={styles.position}>{project.position}</span>
          <p className={styles.description}>{project.description}</p>
          <p className={styles.responsibilities}>{project.responsibilities}</p>
        </div>
      ))}
    </div>
  );
}
