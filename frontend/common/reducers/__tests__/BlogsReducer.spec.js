import {POST_BLOG_SUCCESS} from "../../actions/BlogActions";
import BlogsReducer from "../BlogsReducer";

describe('blogs reducer', () => {
    it('should return the initial state', () => {
        expect(BlogsReducer(undefined, {})).toEqual([])
    });

    it('should handle POST_BLOG_SUCCESS', () => {
        expect(
            BlogsReducer([], {
                type: POST_BLOG_SUCCESS,
                payload: {author: 'me', message: 'test', _id: '1'}
            })
        ).toEqual([
            {author: 'me', message: 'test', _id: '1'}
        ]);

        expect(
            BlogsReducer(
                [
                    {author: 'me', message: 'test', _id: '1'}
                ],
                {
                    type: POST_BLOG_SUCCESS,
                    payload: {author: 'me2', message: 'test2', _id: '2'}
                }
            )
        ).toEqual([
            {author: 'me2', message: 'test2', _id: '2'},
            {author: 'me', message: 'test', _id: '1'}
        ])
    })
});