import React from 'react'
import {connect} from 'react-redux'
import * as actions from '../../actions/index'

let LogOutButtonComponent = ({logOut}) => {
    return (
        <input type='button' onClick={logOut} value='Log Out'/>
    )
};

LogOutButtonComponent = connect(undefined, actions)(LogOutButtonComponent);

export default LogOutButtonComponent