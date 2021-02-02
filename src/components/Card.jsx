import styles from '../styles/Column.module.scss';

/* eslint-disable react/prop-types */
function Card({ title, columnIndex, cardIndex, moveCard }) {
  const moveLeft = () => {
    moveCard(cardIndex, columnIndex, 'left');
  };
  const moveRight = () => {
    moveCard(cardIndex, columnIndex, 'right');
  };

  return (
    <div className={styles.card}>
      <button type="button" onClick={moveLeft} disabled={columnIndex === 0}>
        &lt;
      </button>
      <span>{title}</span>
      <button type="button" onClick={moveRight} disabled={columnIndex === 3}>
        &gt;
      </button>
    </div>
  );
}

export default Card;
