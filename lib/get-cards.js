import { random, shuffle } from 'lodash';
import htmlColors from 'html-colors';

const colors = htmlColors.all();
const colorKeys = Object.keys(colors);

// Accepts an array of colors. Returns a color not already in that array.
const getRandomColorNotInCollection = collection => {
  const randomIndex = random(0, colorKeys.length - 1);
  const color = colorKeys[randomIndex];
  return collection.find(item => item.color === color)
    ? getRandomColorNotInCollection(collection)
    : color;
};

export default () => {
  // Get 24 cards. Each "card" is an html color string. Loop through 12 times,
  // because for each loop we add 2 of the same card.
  const cards = [...new Array(12)].reduce(acc => {
    const color = getRandomColorNotInCollection(acc);
    acc.push(
      { color, key: `${color}1`, visible: true },
      { color, key: `${color}2`, visible: true },
    );
    return acc;
  }, []);

  // Randomize cards
  // Easy mode: return cards;
  return shuffle(cards);
};
