import { LOG_OUT, LOGIN_SUCCESS, SIGNUP_SUCCESS, GET_CURRENT_USER_SUCCESS } from '../actions'

const AuthReducer = (state = {username:'anonymous', isLogged:false}, action) => {
    switch (action.type) {
        case LOG_OUT:
            return {username:'anonymous', isLogged:false};
        case LOGIN_SUCCESS:
            return {username:action.payload.username, isLogged:true};
        case SIGNUP_SUCCESS:
            return {username:action.payload.username, isLogged:true};
        case GET_CURRENT_USER_SUCCESS:
            return {username:action.payload.username, isLogged:true};
        default:
            return state
    }
};

export default AuthReducer