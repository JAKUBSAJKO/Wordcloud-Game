import { Button } from 'components/button/button';
import { GameContext } from 'contexts/gameContext';
import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './result.css';
import * as myConst from 'constants/index';

const Result = () => {
  const navigate = useNavigate();

  const {
    username,
    correctAnswers,
    wrongAnswers,
    noSelectedCorrectAnswers,
    setFinishGameBtn,
  } = useContext(GameContext);

  const points =
    correctAnswers.length * 2 -
    (wrongAnswers.length + noSelectedCorrectAnswers.length);

  const endGame = () => {
    setFinishGameBtn((prev) => !prev);
    navigate(myConst.HOME);
  };

  useEffect(() => {
    if (username.length < 1) navigate(myConst.HOME);
  }, []);

  return (
    <div className="layout-result flex-center">
      <div className="result-container flex-center">
        <p className="result-text">Congratulations, {username}!</p>
        <p className="result-text">Your score:</p>
        <p className="points">{points} points</p>
        <Button onClick={endGame} text="play again" />
      </div>
    </div>
  );
};

export default Result;
