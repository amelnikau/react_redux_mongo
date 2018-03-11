import React from 'react'
import {connect} from 'react-redux'
import * as actions from '../../actions/index'
import { withRouter } from 'react-router-dom';

let LoginFormComponent = ({setErrorMessage, login, signUp, history}) => {
    let passwordInputValue;
    let usernameInputValue;

    function handleLoginActivity(e, action) {
        e.preventDefault();
        if (hasErrors()) return;
        action(usernameInputValue.value, passwordInputValue.value, history);
    }

    function onLoginClick(e) {
       handleLoginActivity(e, login);
    }

    function onSignUpClick(e) {
        handleLoginActivity(e, signUp);
    }

    function hasErrors() {
        if (!usernameInputValue.value.trim() || !passwordInputValue.value.trim()) {
            setErrorMessage("Required field value missing");
            return true;
        }
        return false;
    }

    return (
        <div>
            Username: <input type='text' ref={node => {usernameInputValue = node}}/><br/>
            Password: <input type='password' ref={node => {passwordInputValue = node}}/><br/>
            <input type='button' onClick={onLoginClick} value='Log In'/>
            <input type='button' onClick={onSignUpClick} value='Sign Up'/>
        </div>
    )
};

LoginFormComponent = withRouter(connect(undefined, actions)(LoginFormComponent));

export default LoginFormComponent