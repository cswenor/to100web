import React from 'react';

function GameModeSelection({ onSelectMode }) {
    return (
        <div className="game-mode-selection flex flex-col items-center justify-center p-6 bg-white rounded-lg shadow-lg">
            <h2 className="text-2xl text-navy-blue font-bold mb-4">Select Game Mode</h2>
            <button 
                className="bg-coral text-white font-semibold py-2 px-4 rounded hover:bg-teal transition duration-300 mb-2" 
                onClick={() => onSelectMode(1, false)}>
                Single Player (Easy)
            </button>
            <button 
                className="bg-coral text-white font-semibold py-2 px-4 rounded hover:bg-teal transition duration-300 mb-2" 
                onClick={() => onSelectMode(1, true)}>
                Single Player (Hard)
            </button>
            <button 
                className="bg-coral text-white font-semibold py-2 px-4 rounded hover:bg-teal transition duration-300" 
                onClick={() => onSelectMode(2, false)}>
                Two Players
            </button>
        </div>
    );
}

export default GameModeSelection;
