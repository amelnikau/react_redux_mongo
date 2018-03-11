import React from 'react';
import MainPage from '../containers/MainPage'
import LoginPage from '../containers/LoginPage'
import {Route} from 'react-router-dom'

const AppRouter = () => {
    return (
        <div>
            <Route exact path="/" component={MainPage}/>
            <Route path="/login" component={LoginPage}/>
        </div>
    );
};

export default AppRouter;