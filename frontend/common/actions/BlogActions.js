import {request, failure, success} from "../utils/ActionStages";
import blogApi from '../api/api';
import {setErrorMessage} from "./ErrorActions";

export const POST_BLOG_REQUEST = 'POST_BLOG_REQUEST';
export const POST_BLOG_SUCCESS = 'POST_BLOG_SUCCESS';
export const POST_BLOG_FAILURE = 'POST_BLOG_FAILURE';
export const SET_FILTER = 'SET_FILTER';

export const postBlog = (message, author = 'anonymous') => {
    return dispatch => {
        dispatch(request(POST_BLOG_REQUEST, {author}));

        return blogApi.postBlog(message, author)
            .then(
                payload => {
                    dispatch(success(POST_BLOG_SUCCESS, payload));
                },
                error => {
                    dispatch(failure(POST_BLOG_FAILURE, error));
                    dispatch(setErrorMessage(error.toString()));
                }
            );
    };
};

export const setFilter = (filterString) => ({
    type: SET_FILTER,
    filterString
});