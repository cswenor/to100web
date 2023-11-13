import { aiTurn } from './ai';
import { useReducer, useEffect } from 'react';
import gameReducer, { initialState, actionTypes } from '../reducers/gameReducer';

function useGameLogic() {
    const [state, dispatch] = useReducer(gameReducer, initialState);

    // Effect for switching player
    useEffect(() => {
        const { totalScore, winner } = state.roundState;

        if (totalScore && !winner) {
            dispatch({ type: actionTypes.SWITCH_PLAYER });
        }
    }, [state.roundState.totalScore, state.roundState.winner]);

    useEffect(() => {
        const { currentPlayer, totalScore, winner } = state.roundState;
        const { isSinglePlayer, aiPlayerNumber } = state.gameState;

        if (isSinglePlayer && currentPlayer === aiPlayerNumber && totalScore < 100 && !winner) {
            aiTurn(totalScore, (aiChoice) => {
                dispatch({ type: actionTypes.SUBMIT_NUMBER, payload: { number: aiChoice } });
            });
        }
    }, [state.roundState.currentPlayer, state.gameState.aiPlayerNumber]);

    const submitNumber = (number) => {
        dispatch({ type: actionTypes.SUBMIT_NUMBER, payload: { number } });
    };

    const startNewGame = (singlePlayer, hardMode) => {
        const aiStartsFirst = singlePlayer && Math.random() < 0.5;
        dispatch({
            type: actionTypes.START_GAME,
            payload: { singlePlayer, hardMode, aiStartsFirst }
        });
    };

    return {
        ...state.roundState,
        ...state.gameState,
        submitNumber,
        startNewGame
    };
}

export default useGameLogic;
