import React from 'react'
import {connect} from 'react-redux'
import * as actions from '../actions'
import AddBlogComponent from '../components/blogs/AddBlogComponent'
import BlogFilterComponent from '../components/blogs/BlogFilterComponent';
import UserInfoComponent from '../components/auth/UserInfoComponent';
import BlogsContainer from "../containers/BlogsContainer";
import ErrorMessageComponent from "../components/err/ErrorMessageComponent"

class MainPage extends React.Component {

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
                <UserInfoComponent/>
                <AddBlogComponent/>
                <BlogFilterComponent/>
                <BlogsContainer/>
                <ErrorMessageComponent/>
            </div>
        );
    }
}

MainPage = connect(undefined, actions)(MainPage);

export default MainPage
