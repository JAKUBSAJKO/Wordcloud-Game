import { createContext, useState } from 'react';

const gameContext = {
  username: '',
};

export const GameContext = createContext(gameContext);

export const GameContextProvider = ({ children }) => {
  const [username, setUsername] = useState('');
  return (
    <GameContext.Provider value={{ username, setUsername }}>
      {children}
    </GameContext.Provider>
  );
};
