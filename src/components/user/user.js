import axios from 'axios';
import { Button } from 'components/button/button';
import { categoriesName } from 'constants';
import { GameContext } from 'contexts/gameContext';
import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './user.css';
import * as myConst from 'constants/index';

export const User = () => {
  const navigate = useNavigate();

  const {
    username,
    setUsername,
    setQuestion,
    setAllWords,
    setGoodWords,
    setSelectedWords,
    setCorrectAnswers,
    setWrongAnswers,
    setNoSelectedCorrectAnswers,
  } = useContext(GameContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setQuestion([]);
    setAllWords([]);
    setGoodWords([]);
    setSelectedWords([]);
    setCorrectAnswers([]);
    setWrongAnswers([]);
    setNoSelectedCorrectAnswers([]);
    const category =
      categoriesName[Math.floor(Math.random() * categoriesName.length)];
    API(category);
    navigate(myConst.GAME);
  };

  const API = (category) => {
    axios(`http://localhost:3001/${category}`).then((data) => {
      setQuestion(data.data.question);
      setAllWords(data.data.all_words);
      setGoodWords(data.data.good_words);
    });
  };

  useEffect(() => {
    setUsername('');
  }, []);

  return (
    <form onSubmit={handleSubmit} className="flex-center">
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
