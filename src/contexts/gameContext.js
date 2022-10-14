import { createContext, useState } from 'react';

const gameContext = {
  username: '',
  finishBtn: false,
  selectedWords: [],
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
  const [selectedWords, setSelectedWords] = useState([]);
  const [correctAnswers, setCorrectAnswers] = useState([]);
  const [wrongAnswers, setWrongAnswers] = useState([]);
  const [noSelectedCorrectAnswers, setNoSelectedCorrectAnswers] = useState([]);
  const [question, setQuestion] = useState();
  const [allWords, setAllWords] = useState([]);
  const [goodWords, setGoodWords] = useState([]);

  const addToArray = (word, setArray) => {
    setArray((prev) => [...prev, word]);
  };

  const removeFromArray = (word, array, setArray) => {
    setArray(array.map((el) => el !== word));
  };

  return (
    <GameContext.Provider
      value={{
        username,
        setUsername,
        finishGameBtn,
        setFinishGameBtn,
        selectedWords,
        setSelectedWords,
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
        addToArray,
        removeFromArray,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};
