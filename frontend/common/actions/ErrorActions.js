export const SET_ERROR_MESSAGE = 'SET_ERROR_MESSAGE';
export const CLEAR_ERROR = 'CLEAR_ERROR';

export const setErrorMessage = (errorMessage) => ({
    type: SET_ERROR_MESSAGE,
    err: errorMessage
});

export const clearError = () => ({
    type: CLEAR_ERROR
});