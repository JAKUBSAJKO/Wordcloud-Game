import { GameContextProvider } from 'contexts/gameContext';
import Game from 'pages/Game/Game';
import Result from 'pages/Result/Result';
import Start from 'pages/Start/Start';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <GameContextProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Start />} />
            <Route path="/game" element={<Game />} />
            <Route path="/result" element={<Result />} />
          </Routes>
        </Router>
      </GameContextProvider>
    </div>
  );
}

export default App;
