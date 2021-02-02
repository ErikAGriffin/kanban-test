import { useState } from 'react';
import Column from './components/Column';
import styles from './styles/App.module.scss';

function App() {
  const [columns, setColumns] = useState({ 0: [], 1: [], 2: [], 3: [] });

  const addCard = (cardData, columnIndex) => {
    const oldColumns = { ...columns };
    oldColumns[columnIndex].push(cardData);
    setColumns(oldColumns);
  };

  const moveCard = (cardIndex, columnIndex, direction) => {
    if (direction !== 'left' && direction !== 'right') {
      return;
    }
    if (direction === 'left' && columnIndex === 0) {
      return;
    }
    if (direction === 'right' && columnIndex === 3) {
      return;
    }
    const oldColumns = { ...columns };
    const cardData = oldColumns[columnIndex][cardIndex];
    oldColumns[columnIndex].splice(cardIndex, 1);
    if (direction === 'left') {
      oldColumns[columnIndex - 1].splice(cardIndex, 0, cardData);
    } else if (direction === 'right') {
      oldColumns[columnIndex + 1].splice(cardIndex, 0, cardData);
    }
    setColumns(oldColumns);
  };

  return (
    <>
      <div className={styles.kanbanContainer}>
        <Column name="Winnie" cIndex={0} cards={columns[0]} addCard={addCard} moveCard={moveCard} />
        <Column name="Bob" cIndex={1} cards={columns[1]} addCard={addCard} moveCard={moveCard} />
        <Column name="James" cIndex={2} cards={columns[2]} addCard={addCard} moveCard={moveCard} />
        <Column name="Thomas" cIndex={3} cards={columns[3]} addCard={addCard} moveCard={moveCard} />
      </div>
    </>
  );
}

export default App;
