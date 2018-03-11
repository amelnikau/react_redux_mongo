import React from 'react'
import {connect} from 'react-redux'
import styled from 'styled-components';
import LogOutButtonComponent from './LogOutButtonComponent';
import UsernameSpanComponent from './UsernameSpanComponent';
import LoginLinkComponent from './LoginLinkComponent';

const UserInfoDiv = styled.div`
  display: inline;
`;

let UserInfoComponent = ({isLogged}) => {
    return <UserInfoDiv>
                <UsernameSpanComponent/> {isLogged ? <LogOutButtonComponent/> : <LoginLinkComponent/>}
           </UserInfoDiv>
};


const mapStateToProps = (state) => ({
    isLogged: state.auth.isLogged
});

UserInfoComponent = connect(mapStateToProps)(UserInfoComponent);

export default UserInfoComponent