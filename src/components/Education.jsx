import React from "react";
import styles from "../styles/Education.module.scss";

export default function Education({ school, year, major, note }) {
  return (
    <div className={styles.education}>
      <p className={styles.school}>
        {school}
      </p>
      <p className={styles.year}>{year}</p>
      <p>{note}</p>
    </div>
  );
}
