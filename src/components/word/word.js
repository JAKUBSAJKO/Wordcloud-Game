import { useState } from 'react';
import './word.css';

export const Word = ({ name }) => {
  const [pickedWords, setPickedWords] = useState([]);

  const selectWord = (e) => {
    const word = e.target.innerText;

    if (pickedWords.includes(word)) {
      setPickedWords(pickedWords.filter((pick) => pick !== word));
    } else {
      setPickedWords((prev) => [...prev, word]);
    }
  };

  return (
    <div className="card">
      <p className="answer">Good</p>
      <p
        onClick={selectWord}
        className="word"
        style={
          pickedWords.includes(name) ? { color: 'silver' } : { color: 'black' }
        }
      >
        {name}
      </p>
    </div>
  );
};
