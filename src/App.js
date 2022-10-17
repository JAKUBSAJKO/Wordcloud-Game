import { GameContextProvider } from 'contexts/gameContext';
import Game from 'pages/Game/Game';
import Result from 'pages/Result/Result';
import Start from 'pages/Start/Start';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import * as myConst from './constants/index';

function App() {
  return (
    <div className="App">
      <GameContextProvider>
        <Router>
          <Routes>
            <Route path={myConst.HOME} element={<Start />} />
            <Route path={myConst.GAME} element={<Game />} />
            <Route path={myConst.RESULT} element={<Result />} />
          </Routes>
        </Router>
      </GameContextProvider>
    </div>
  );
}

export default App;
