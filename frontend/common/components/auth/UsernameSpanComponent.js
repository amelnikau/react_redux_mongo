import React from 'react'
import {connect} from 'react-redux'

let UsernameSpanComponent = ({username}) => {
    return (
        <span>Username: {username}</span>
    )
};

const mapStateToProps = (state) => ({
    username: state.auth.username
});

UsernameSpanComponent = connect(mapStateToProps)(UsernameSpanComponent);

export default UsernameSpanComponent