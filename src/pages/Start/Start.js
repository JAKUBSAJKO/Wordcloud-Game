import Button from 'components/button/button';
import { useNavigate } from 'react-router-dom';
import './Start.css';

const Start = () => {
  const navigate = useNavigate();

  const startGame = () => {
    navigate('/game');
  };

  return (
    <div className="container">
      <h1>Wordcloud Game</h1>
      <input type="text" placeholder="Enter your nickname here..." />
      <Button text="play" onClick={startGame} />
    </div>
  );
};

export default Start;
