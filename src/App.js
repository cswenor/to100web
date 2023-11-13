import React, { useState } from 'react';
import useGameLogic from './hooks/useGameLogic';
import PlayerInput from './components/PlayerInput';
import GameBoard from './components/GameBoard';
import GameModeSelection from './components/GameModeSelection';

function App() {
    const { totalScore, currentPlayer, submitNumber, winner, startNewGame, isSinglePlayer, aiPlayerNumber } = useGameLogic();
    const [gameModeSelected, setGameModeSelected] = useState(false);

    const handleGameModeSelection = (mode, isHardMode) => {
        setGameModeSelected(true);
        startNewGame(mode === 1, isHardMode); // Start game with selected mode and difficulty
    };

    const renderWinner = () => {
        if (isSinglePlayer) {
            return winner === aiPlayerNumber ? 'The AI' : 'You';
        } else {
            return `Player ${winner}`;
        }
    };

    if (!gameModeSelected) {
        return <GameModeSelection onSelectMode={handleGameModeSelection} />;
    }

    return (
      <div className="app min-h-screen bg-light-grey text-dark-grey flex flex-col items-center justify-center p-4">
          {!winner && (
              <>
                  <GameBoard 
                      currentScore={totalScore} 
                      currentPlayer={currentPlayer} 
                      isSinglePlayer={isSinglePlayer} 
                      aiPlayerNumber={aiPlayerNumber} 
                      className="mb-4"
                  />
                  <PlayerInput onNumberChosen={submitNumber} className="mt-4" />
              </>
          )}

          {winner && (
              <div className="text-center">
                  <h2 className="text-2xl font-bold mb-4">{renderWinner()} wins!</h2>
                  <button 
                      className="bg-navy-blue text-white py-2 px-4 rounded hover:bg-coral transition-colors"
                      onClick={() => {
                          setGameModeSelected(false);
                          startNewGame(false, false);
                      }}
                  >
                      Start New Game
                  </button>
              </div>
          )}
      </div>
  );
}

export default App;
