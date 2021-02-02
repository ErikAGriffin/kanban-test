import Card from './Card';
import styles from '../styles/Column.module.scss';

/* eslint-disable react/prop-types */
/* eslint-disable arrow-body-style */
function Column({ name, cards, cIndex, addCard, moveCard }) {
  //
  // const addCard = () => {
  //   const cardData = window.prompt('Name your task');
  //   setCards([...cards, cardData]);
  // };

  // const moveCard = () => {};

  const newCard = () => {
    const cardData = window.prompt('Name your task');
    addCard(cardData, cIndex);
  };

  return (
    <article className={styles.Column}>
      <h2>{name}</h2>
      {cards.map((card, i) => {
        return <Card key={card} title={card} columnIndex={cIndex} cardIndex={i} moveCard={moveCard} />;
      })}
      <button type="button" className={styles.addCard} onClick={newCard}>
        + Add Card
      </button>
    </article>
  );
}

export default Column;
