import { setAIDifficulty } from '../hooks/ai';

export const initialState = {
    gameState: {
        isSinglePlayer: false,
        aiPlayerNumber: null
    },
    roundState: {
        totalScore: 0,
        currentPlayer: 1,
        winner: null
    }
};

export const actionTypes = {
    START_GAME: 'START_GAME',
    SUBMIT_NUMBER: 'SUBMIT_NUMBER',
    SWITCH_PLAYER: 'SWITCH_PLAYER'
};

function gameReducer(state, action) {
    switch (action.type) {
        case actionTypes.START_GAME:
            const { singlePlayer, hardMode, aiStartsFirst } = action.payload;
            setAIDifficulty(hardMode);
            return {
                ...state,
                gameState: {
                    isSinglePlayer: singlePlayer,
                    aiPlayerNumber: aiStartsFirst ? 1 : 2
                },
                roundState: {
                    totalScore: 0,
                    currentPlayer: 1,
                    winner: null
                }
            };

        case actionTypes.SUBMIT_NUMBER:
            const newScore = state.roundState.totalScore + action.payload.number;
            const winner = newScore >= 100 ? state.roundState.currentPlayer : null;
            return {
                ...state,
                roundState: {
                    ...state.roundState,
                    totalScore: newScore,
                    winner: winner
                }
            };

        case actionTypes.SWITCH_PLAYER:
            const nextPlayer = state.roundState.currentPlayer === 1 ? 2 : 1;
            return {
                ...state,
                roundState: {
                    ...state.roundState,
                    currentPlayer: nextPlayer
                }
            };

        default:
            return state;
    }
}

export default gameReducer;
