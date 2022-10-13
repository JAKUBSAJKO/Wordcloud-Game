import { GameContext } from 'contexts/gameContext';
import { useContext } from 'react';
import './result.css';

const Result = () => {
  const { username, correctAnswers, wrongAnswers, noSelectedCorrectAnswers } =
    useContext(GameContext);
  const points =
    correctAnswers.length * 2 -
    (wrongAnswers.length + noSelectedCorrectAnswers.length);
  return (
    <div className="layout-result">
      <div className="container-result">
        <p className="result-text">Congratulations, {username}!</p>
        <p className="result-text">Your score:</p>
        <p className="points">{points} points</p>
      </div>
    </div>
  );
};

export default Result;
