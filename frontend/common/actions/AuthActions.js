import {request, failure, success} from "../utils/ActionStages";
import blogApi from '../api/api';
import {setErrorMessage} from "./ErrorActions";

export const SIGNUP_REQUEST = 'SIGNUP_REQUEST';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_FAILURE = 'SIGNUP_FAILURE';
export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const GET_CURRENT_USER_REQUEST = 'GET_CURRENT_USER_REQUEST';
export const GET_CURRENT_USER_SUCCESS = 'GET_CURRENT_USER_SUCCESS';
export const GET_CURRENT_USER_FAILURE = 'GET_CURRENT_USER_FAILURE';
export const LOG_OUT = 'LOG_OUT';

export const signUp = (username, password, history) => {
    return dispatch => {
        dispatch(request(SIGNUP_REQUEST, {username}));

        return blogApi.singUp(username, password)
            .then(
                payload => {
                    dispatch(success(SIGNUP_SUCCESS, payload));
                    history.push('/');
                },
                error => {
                    dispatch(failure(SIGNUP_FAILURE, error));
                    dispatch(setErrorMessage(error.toString()));
                }
            );
    };

};

export const login = (username, password, history) => {
    return dispatch => {
        dispatch(request(LOGIN_REQUEST, {username}));

        return blogApi.login(username, password)
            .then(
                payload => {
                    dispatch(success(LOGIN_SUCCESS, payload));
                    history.push('/');
                },
                error => {
                    dispatch(failure(LOGIN_FAILURE, error));
                    dispatch(setErrorMessage(error.toString()));
                }
            );
    };
};

export const getCurrentUser = (token) => {
    return dispatch => {
        if (token) {
            dispatch(request(GET_CURRENT_USER_REQUEST, {token}));

            return blogApi.getUsernameFromToken(token)
                .then(
                    payload => {
                        dispatch(success(GET_CURRENT_USER_SUCCESS, payload));
                    },
                    error => {
                        dispatch(failure(GET_CURRENT_USER_FAILURE, error));
                        dispatch(setErrorMessage(error.toString()));
                    }
                );
        }
    };
};

export const logOut = () => {
    blogApi.logOut();
    return {type: LOG_OUT}
};