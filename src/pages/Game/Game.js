import './game.css';
import { Title } from 'components/title/title';
import { Button } from 'components/button/button';
import { Word } from 'components/word/word';
import { useContext } from 'react';
import { GameContext } from 'contexts/gameContext';
import { useNavigate } from 'react-router-dom';

const animals = {
  question: 'select animals',
  all_words: [
    'hole',
    'sofa',
    'pear',
    'tiger',
    'oatmeal',
    'square',
    'nut',
    'cub',
    'shirt',
    'tab',
    'passenger',
    'cow',
  ],
  good_words: ['tiger', 'cow'],
};

const Game = () => {
  const {
    finishGameBtn,
    setFinishGameBtn,
    pickedWords,
    setCorrectAnswers,
    setWrongAnswers,
    setNoSelectedCorrectAnswers,
  } = useContext(GameContext);

  const navigate = useNavigate();

  const checkAnswers = () => {
    setFinishGameBtn((prev) => !prev);
    animals.all_words.map((word) => {
      if (pickedWords.includes(word)) {
        if (animals.good_words.includes(word)) {
          setCorrectAnswers((prev) => [...prev, word]);
        } else {
          setWrongAnswers((prev) => [...prev, word]);
        }
      } else {
        if (animals.good_words.includes(word)) {
          setNoSelectedCorrectAnswers((prev) => [...prev, word]);
        }
      }

      return true;
    });
  };

  return (
    <div className="layout">
      <div className="game-container">
        <Title title={animals.question} />
        <div className="game-board">
          {animals.all_words.map((animal) => (
            <Word key={animal} name={animal} />
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
