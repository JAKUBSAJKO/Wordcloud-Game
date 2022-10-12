import { createContext, useState } from 'react';

const gameContext = {
  username: '',
  finishBtn: false,
  pickedWords: [],
  correctAnswers: [],
  wrongAnswers: [],
  noSelectedCorrectAnswers: [],
};

export const GameContext = createContext(gameContext);

export const GameContextProvider = ({ children }) => {
  const [username, setUsername] = useState('');
  const [finishGameBtn, setFinishGameBtn] = useState(false);
  const [pickedWords, setPickedWords] = useState([]);
  const [correctAnswers, setCorrectAnswers] = useState([]);
  const [wrongAnswers, setWrongAnswers] = useState([]);
  const [noSelectedCorrectAnswers, setNoSelectedCorrectAnswers] = useState([]);

  return (
    <GameContext.Provider
      value={{
        username,
        setUsername,
        finishGameBtn,
        setFinishGameBtn,
        pickedWords,
        setPickedWords,
        correctAnswers,
        setCorrectAnswers,
        wrongAnswers,
        setWrongAnswers,
        noSelectedCorrectAnswers,
        setNoSelectedCorrectAnswers,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};
