import React from 'react';

function GameBoard({ currentScore, currentPlayer, isSinglePlayer, aiPlayerNumber }) {
    const getTurnText = () => {
        if (isSinglePlayer) {
            return currentPlayer === aiPlayerNumber ? "AI's Turn" : "Your Turn";
        } else {
            return `Player ${currentPlayer}'s Turn`;
        }
    };

    return (
        <div className="game-board p-4 bg-white rounded-lg shadow-md">
            <h2 className="text-lg font-semibold text-navy-blue mb-2">Current Score: {currentScore}</h2>
            <h3 className="text-md font-medium text-teal">{getTurnText()}</h3>
        </div>
    );
}

export default GameBoard;
