import './game.css';
import { Button } from 'components/button/button';
import { Word } from 'components/word/word';
import { useContext } from 'react';
import { GameContext } from 'contexts/gameContext';
import { useNavigate } from 'react-router-dom';

const Game = () => {
  const navigate = useNavigate();

  const {
    finishGameBtn,
    setFinishGameBtn,
    selectedWords,
    setCorrectAnswers,
    setWrongAnswers,
    setNoSelectedCorrectAnswers,
    allWords,
    goodWords,
    question,
    addToArray,
  } = useContext(GameContext);

  const checkAnswers = () => {
    setFinishGameBtn((prev) => !prev);
    allWords.map((word) => {
      if (selectedWords.includes(word)) {
        if (goodWords.includes(word)) {
          addToArray(word, setCorrectAnswers);
        } else {
          addToArray(word, setWrongAnswers);
        }
      } else {
        if (goodWords.includes(word)) {
          addToArray(word, setNoSelectedCorrectAnswers);
        }
      }
      return true;
    });
  };

  return (
    <div className="layout-game flex-center">
      <div className="game-container flex-center">
        <h2>{question}</h2>
        <div className="game-board">
          {allWords.map((word) => (
            <Word key={word} word={word} />
          ))}
        </div>
        {finishGameBtn ? (
          <Button onClick={() => navigate('/result')} text="finish game" />
        ) : (
          <Button onClick={checkAnswers} text="check answers" />
        )}
      </div>
    </div>
  );
};

export default Game;
