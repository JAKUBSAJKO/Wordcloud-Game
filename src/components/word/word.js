import { GameContext } from 'contexts/gameContext';
import { useContext } from 'react';
import './word.css';

export const Word = ({ word }) => {
  const {
    selectedWords,
    setSelectedWords,
    correctAnswers,
    wrongAnswers,
    addToArray,
    removeFromArray,
    finishGameBtn,
  } = useContext(GameContext);

  const selectWord = () => {
    if (selectedWords.includes(word)) {
      if (selectedWords.length === 1) {
        setSelectedWords([]);
      } else {
        removeFromArray(word, selectedWords, setSelectedWords);
      }
    } else {
      addToArray(word, setSelectedWords);
    }
  };

  const checkedAnswerStyle = correctAnswers.includes(word)
    ? 'answer correctAnswer'
    : wrongAnswers.includes(word)
    ? 'answer wrongAnswer'
    : 'answer';

  const checkedAnswerWord = correctAnswers.includes(word)
    ? 'Good'
    : wrongAnswers.includes(word)
    ? 'Bad'
    : 'Empty';

  const checkWordStyle = correctAnswers.includes(word)
    ? 'word correct'
    : wrongAnswers.includes(word)
    ? 'word wrong'
    : 'word';

  const wordStyle = selectedWords.includes(word) ? 'word select' : 'word';

  return (
    <div className="card">
      <div style={{ textAlign: 'center' }}>
        {finishGameBtn ? (
          <>
            <p className={checkedAnswerStyle}>{checkedAnswerWord}</p>
            <p className={checkWordStyle}>{word}</p>
          </>
        ) : (
          <>
            <p className="answer">Empty</p>
            <p onClick={selectWord} className={wordStyle}>
              {word}
            </p>
          </>
        )}
      </div>
    </div>
  );
};
