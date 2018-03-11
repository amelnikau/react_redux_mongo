import { SET_ERROR_MESSAGE, CLEAR_ERROR } from '../actions'

const ErrorReducer = (state = '', action) => {
    switch (action.type) {
        case SET_ERROR_MESSAGE:
            return action.err;
        case CLEAR_ERROR:
            return '';
        default:
            return state
    }
};

export default ErrorReducer