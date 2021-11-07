import React from "react";
import styles from "./styles.module.scss";

function Heading({ list, title }) {
  return (
    <div className={styles.heading}>
      <h4>{title}</h4>
      <span>...</span>
    </div>
  );
}

export default Heading;
