import UsernameSpanComponent from '../../../components/auth/UsernameSpanComponent';
import renderer from 'react-test-renderer';
import React from 'react'
import configureMockStore from 'redux-mock-store'
import {Provider} from 'react-redux'

const mockStore = configureMockStore();

describe('Snapshot components testing', () => {
    describe('UsernameSpanComponent', () => {
        it("should render username test-user", () => {
            const tree = renderer.create(
                <Provider store={mockStore({auth: {username: 'test-user'}})}><UsernameSpanComponent/></Provider>
            ).toJSON();
            expect(tree).toMatchSnapshot();
        });
    })
});