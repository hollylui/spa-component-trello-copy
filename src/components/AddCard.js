import React, { Component } from "react";
import { FaPlus } from "react-icons/fa";
import styles from "./styles.module.scss";

export default class AddCard extends Component {
  render() {
    return (
      <div className={styles.addCard}>
        <FaPlus />
        &nbsp;Add another card
      </div>
    );
  }
}
