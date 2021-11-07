import React from "react";
import styles from "./styles.module.scss";

function Text({ list }) {
  return (
    <div className={styles.productBacklog}>
      {list.map((each) => (
        <div key={each.id}>{each.text}</div>
      ))}
    </div>
  );
}

export default Text;
