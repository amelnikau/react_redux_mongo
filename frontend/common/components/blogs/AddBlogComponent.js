import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../../actions/index'

let AddBlogComponent = ({ postBlog, username }) => {
    let input;

    function handleSubmit(e) {
        e.preventDefault();
        if (!input.value.trim()) {
            return
        }
        postBlog(input.value, username);
        input.value = ''
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input ref={node => { input = node}} />
                <button type="submit">
                    Add Blog Message
                </button>
            </form>
        </div>
    )
};

const mapStateToProps = (state) => ({
    username: state.auth.username
});

AddBlogComponent = connect(mapStateToProps, actions)(AddBlogComponent);

export default AddBlogComponent