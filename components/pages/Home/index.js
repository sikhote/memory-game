import React, { useState, useEffect } from 'react';
import { merge } from 'lodash';
import { Global } from '@emotion/core';
import getCards from '../../../lib/get-cards';
import styles from './styles';

const Home = () => {
  const [cards, cardsSet] = useState([]);
  const [gameOver, gameOverSet] = useState(false);
  const [attempts, attemptsSet] = useState(0);
  useEffect(() => {
    cardsSet(getCards());
  }, []);
  const [flipIdx, flipIdxSet] = useState(undefined);

  const flipCard = idx => {
    // Check if new index is current index...if so, hide the card and stop
    if (idx === flipIdx) {
      flipIdxSet(undefined);
      return;
    }

    attemptsSet(attempts + 1);

    // Check for match with current index and hide if match...or change card
    if (flipIdx !== undefined && cards[flipIdx].color === cards[idx].color) {
      const newCards = [...cards];
      newCards[idx].visible = false;
      newCards[flipIdx].visible = false;

      cardsSet(newCards);
      flipIdxSet(undefined);

      // Check if no more cards visible, which will end the game
      if (!newCards.find(card => card.visible)) {
        gameOverSet(true);
      }
    } else {
      flipIdxSet(idx);
    }
  };

  const restartGame = () => {
    gameOverSet(false);
    cardsSet(getCards());
    attemptsSet(0);
  };

  return (
    <div css={styles.root}>
      <Global styles={styles.global} />
      {gameOver && (
        <div css={styles.gameOver}>
          You won after {attempts} attempts!
          <br />
          <br />
          <button type="button" onClick={() => restartGame()}>
            Play Again
          </button>
        </div>
      )}
      {!gameOver && (
        <div css={styles.cards}>
          {cards.map(({ color, key, visible }, idx) => (
            <div
              key={key}
              css={merge({}, styles.card, {
                opacity: visible ? 1 : 0,
              })}
              role="button"
              onClick={() => visible && flipCard(idx)}
            >
              <div
                css={merge({}, styles.cardInner, {
                  cursor: visible ? 'pointer' : 'default',
                })}
              >
                <div
                  css={merge({}, styles.contents, {
                    visibility: flipIdx === idx ? 'visible' : 'hidden',
                  })}
                >
                  <div css={merge({}, styles.sample, { background: color })} />
                  <div css={styles.label}>{color}</div>
                </div>

                <div
                  css={merge({}, styles.back, {
                    visibility: flipIdx === idx ? 'hidden' : 'visible',
                  })}
                >
                  ?
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
