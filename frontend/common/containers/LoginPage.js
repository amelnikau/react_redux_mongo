import React from 'react'
import {connect} from 'react-redux'
import * as actions from '../actions'
import ErrorMessageComponent from '../components/err/ErrorMessageComponent';
import LogOutButtonComponent from '../components/auth/LogOutButtonComponent';
import UsernameSpanComponent from '../components/auth/UsernameSpanComponent';
import MainPageLinkComponent from '../components/auth/MainPageLinkComponent';
import LoginFormComponent from '../components/auth/LoginFormComponent';

class LoginPage extends React.Component {

    constructor(props) {
        super(props);

        const { clearError } = this.props;
        this.props.history.listen((location, action) => {
            clearError();
        });
    }

    componentDidMount() {
        this.props.getCurrentUser(localStorage.token);
    }

    render() {
        return (
            <div>
                <MainPageLinkComponent/><br/>
                <UsernameSpanComponent/>
                {this.props.isLogged ? <LogOutButtonComponent/> : <LoginFormComponent/>}
                <ErrorMessageComponent/>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    isLogged: state.auth.isLogged
});

LoginPage = connect(mapStateToProps, actions)(LoginPage);

export default LoginPage