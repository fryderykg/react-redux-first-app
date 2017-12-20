import * as actionTypes from '../actions/actions';

const initialState = {
    results: []
};

const reducer = (state=initialState, action) => {
    switch (action.type) {

        case actionTypes.STORE_RESULT:
            return {
                ...state,
                results: state.results.concat({
                    id: Date.now(),
                    value: action.value
                })
            };
        case actionTypes.DELETE_RESULT:
            const updatedResults = state.results.filter(result => {
                return result.id !== action.id
            });
            return {
                ...state,
                results: updatedResults
            };
        default:
            return state
    }
};

export default reducer