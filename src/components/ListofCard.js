import React, { Component } from "react";
import Heading from "./Heading";
import Text from "./Text";
import AddCard from "./AddCard";
import styles from "./styles.module.scss";

export default class ListofCard extends Component {
  render() {
    const { listOfCards } = this.props;

    return (
      <div className={styles.listOfCards}>
        {listOfCards.map((card) => (
          <div
            key={listOfCards.id}
            className={`${styles.card} ${
              card.title === "Parking Lot"
                ? styles.cardParking
                : styles.cardProduct
            }`}
          >
            <Heading list={card.children} title={card.title} />
            <Text list={card.children} />
            <AddCard />
          </div>
        ))}
      </div>
    );
  }
}
