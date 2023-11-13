import React, { useState } from 'react';

function PlayerInput({ onNumberChosen }) {
    const [number, setNumber] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const num = parseInt(number, 10);
        if (num >= 1 && num <= 10) {
            onNumberChosen(num);
            setNumber('');
        } else {
            alert('Please enter a number between 1 and 10.');
        }
    };

    return (
        <div className="player-input my-4">
            <form onSubmit={handleSubmit} className="flex flex-col items-center">
                <label htmlFor="numberInput" className="mb-2 text-lg font-medium text-dark-grey">
                    Enter your number (1-10):
                </label>
                <input
                    id="numberInput"
                    type="number"
                    value={number}
                    onChange={(e) => setNumber(e.target.value)}
                    min="1"
                    max="10"
                    required
                    className="form-input mb-3 px-2 py-1 border rounded focus:outline-none focus:ring-2 focus:ring-teal"
                />
                <button type="submit" className="bg-navy-blue text-white py-2 px-4 rounded hover:bg-coral transition-colors">
                    Submit
                </button>
            </form>
        </div>
    );
}

export default PlayerInput;
