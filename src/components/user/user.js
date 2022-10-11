import axios from 'axios';
import { Button } from 'components/button/button';
import { GameContext } from 'contexts/gameContext';
import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './user.css';

export const User = () => {
  const navigate = useNavigate();

  const { username, setUsername } = useContext(GameContext);

  useEffect(() => {
    localStorage.clear();
    axios('http://localhost:3001/animals').then((data) =>
      console.log(data.data)
    );
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/game');
    localStorage.setItem('Username', username);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter your nickname here..."
        pattern="[A-Za-z]{2,}"
        title="Must contain only letters, and more than 2 characters"
        required
        onChange={(e) => setUsername(e.target.value)}
        value={username}
      />
      <Button text="play" />
    </form>
  );
};
