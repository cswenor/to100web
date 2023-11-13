import React from 'react';

function GameOutcome({ winner, isSinglePlayer, aiPlayerNumber }) {
    let winnerText;

    if (isSinglePlayer) {
        if (winner === aiPlayerNumber) {
            winnerText = 'The AI wins!';
        } else {
            winnerText = 'You win!';
        }
    } else {
        winnerText = `Player ${winner} wins!`;
    }

    return (
        <div className="game-outcome flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow-md">
            <h2 className="text-xl font-bold text-navy-blue mb-2">{winnerText}</h2>
        </div>
    );
}

export default GameOutcome;
