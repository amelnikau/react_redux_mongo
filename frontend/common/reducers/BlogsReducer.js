import {POST_BLOG_SUCCESS} from "../actions/index";

const BlogsReducer = (state = [], action) => {
    switch (action.type) {
        case POST_BLOG_SUCCESS:
            return [
            {
                author: action.payload.author,
                message: action.payload.message,
                _id: action.payload._id
            },...state
        ];
        default:
            return state
    }
};

export default BlogsReducer