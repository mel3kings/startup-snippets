import React from "react";
import styles from "./index.module.css";

const PageUpdates = ({ link, title }) => {
  return (
    <p className="hero__subtitle">
      💡
      <a className={styles.link} href={link}>
        {`New updates (July 2023): ${title}`}
      </a>
    </p>
  );
};

export default PageUpdates;
