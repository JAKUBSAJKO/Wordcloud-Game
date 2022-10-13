import { createContext, useState } from 'react';

const gameContext = {
  username: '',
  finishBtn: false,
  pickedWords: [],
  correctAnswers: [],
  wrongAnswers: [],
  noSelectedCorrectAnswers: [],
  question: '',
  allWords: [],
  goodWords: [],
};

export const GameContext = createContext(gameContext);

export const GameContextProvider = ({ children }) => {
  const [username, setUsername] = useState('');
  const [finishGameBtn, setFinishGameBtn] = useState(false);
  const [pickedWords, setPickedWords] = useState([]);
  const [correctAnswers, setCorrectAnswers] = useState([]);
  const [wrongAnswers, setWrongAnswers] = useState([]);
  const [noSelectedCorrectAnswers, setNoSelectedCorrectAnswers] = useState([]);
  const [question, setQuestion] = useState();
  const [allWords, setAllWords] = useState([]);
  const [goodWords, setGoodWords] = useState([]);

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
        question,
        setQuestion,
        allWords,
        setAllWords,
        goodWords,
        setGoodWords,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};
