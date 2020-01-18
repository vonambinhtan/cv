import React from "react";
import styles from "../styles/ResearchExperience.module.scss";

export default function ResearchcExperience({
  type,
  link,
  author,
  title,
  note,
  time
}) {
  return (
    <div className={styles.researchExperience}>
      <a href={link} className={styles.title}>
        {title}
      </a>
      <p className={styles.time}>{time}</p>
      <div className={styles.info}>
        <p className={styles.author}>{author}</p>

        <p className={styles.note}>{note}</p>
      </div>
    </div>
  );
}
