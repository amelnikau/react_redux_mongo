import {setFilter, postBlog, POST_BLOG_SUCCESS, SET_FILTER, POST_BLOG_REQUEST} from "../BlogActions";
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import fetchMock from 'fetch-mock'
import 'jest-localstorage-mock';
import expect from 'expect';

describe('actions', () => {
    it('should create an action to set filter', () => {
        const filterString = 'mine';
        const expectedAction = {
            type: SET_FILTER,
            filterString
        };
        expect(setFilter(filterString)).toEqual(expectedAction)
    })
});

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('async actions', () => {
    afterEach(() => {
        fetchMock.reset();
        fetchMock.restore()
    });

    it('creates POST_BLOG_SUCCESS after posting POST_BLOG_REQUEST', () => {

        fetchMock.post('*', {message: 'test', author: 'me', _id: 'id'});

        const expectedActions = [
            {type: POST_BLOG_REQUEST, info: {author: 'me'}},
            {type: POST_BLOG_SUCCESS, payload: {message: 'test', author: 'me', _id: 'id'}}
        ];
        const store = mockStore({blogs: []});

        return store.dispatch(postBlog('test', 'me')).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    })
});