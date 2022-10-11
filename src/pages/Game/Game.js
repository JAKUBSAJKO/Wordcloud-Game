import './game.css';
import { Title } from 'components/title/title';
import { Button } from 'components/button/button';
import { Word } from 'components/word/word';

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
  return (
    <div className="layout">
      <div className="game-container">
        <Title title={animals.question} />
        <div className="game-board">
          {animals.all_words.map((animal) => (
            <Word key={animal} name={animal} />
          ))}
        </div>
        <Button text="check answers" />
      </div>
    </div>
  );
};

export default Game;
