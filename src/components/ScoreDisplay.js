import React from 'react';

function ScoreDisplay({ currentScore }) {
    return (
        <div className="score-display bg-white p-4 rounded-lg shadow-md flex justify-center items-center">
            <h2 className="text-xl font-semibold text-navy-blue">Current Score: <span className="text-coral">{currentScore}</span></h2>
        </div>
    );
}

export default ScoreDisplay;
