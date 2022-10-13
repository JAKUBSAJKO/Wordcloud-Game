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
    pickedWords,
    setCorrectAnswers,
    setWrongAnswers,
    setNoSelectedCorrectAnswers,
    allWords,
    goodWords,
    question,
  } = useContext(GameContext);

  const checkAnswers = () => {
    setFinishGameBtn((prev) => !prev);
    allWords.map((word) => {
      if (pickedWords.includes(word)) {
        if (goodWords.includes(word)) {
          setCorrectAnswers((prev) => [...prev, word]);
        } else {
          setWrongAnswers((prev) => [...prev, word]);
        }
      } else {
        if (goodWords.includes(word)) {
          setNoSelectedCorrectAnswers((prev) => [...prev, word]);
        }
      }

      return true;
    });
  };

  return (
    <div className="layout-game">
      <div className="game-container">
        <h2>{question}</h2>
        <div className="game-board">
          {allWords.map((word) => (
            <Word key={word} name={word} />
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
