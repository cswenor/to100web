let isHardMode = false;

function aiTurn(currentScore, callback) {
    let aiChoice;

    if (isHardMode) {
        aiChoice = (11 - (currentScore % 11)) % 11 + 1;
        if (aiChoice === 0 || aiChoice > 10) {
            // If the modulo operation results in 0 or a number greater than 10, choose 1
            aiChoice = 1;
        } 
    } else {
        // Random choice in Easy mode
        aiChoice = Math.floor(Math.random() * 10) + 1;
    }

    callback(aiChoice);
}

function setAIDifficulty(hardMode) {
    isHardMode = hardMode;
}

function getAIDifficulty() {
    return isHardMode;
}

module.exports = { aiTurn, setAIDifficulty, getAIDifficulty };
