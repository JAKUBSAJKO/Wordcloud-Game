import { GameContext } from 'contexts/gameContext';
import { useContext } from 'react';
import './word.css';

export const Word = ({ name }) => {
  const {
    finishGameBtn,
    pickedWords,
    setPickedWords,
    correctAnswers,
    wrongAnswers,
  } = useContext(GameContext);

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
      {finishGameBtn ? (
        <p
          className="answer"
          style={
            correctAnswers.includes(name)
              ? { color: 'green' }
              : { color: 'pink' }
          }
        >
          {correctAnswers.includes(name)
            ? 'Good'
            : wrongAnswers.includes(name)
            ? 'Bad'
            : ''}
        </p>
      ) : (
        <p></p>
      )}
      <p
        onClick={selectWord}
        className="word"
        style={
          finishGameBtn
            ? correctAnswers.includes(name)
              ? { color: 'greenyellow' }
              : wrongAnswers.includes(name)
              ? { color: 'red' }
              : {}
            : pickedWords.includes(name)
            ? { color: 'silver' }
            : { color: 'black' }
        }
      >
        {name}
      </p>
    </div>
  );
};
