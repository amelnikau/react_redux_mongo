import LoginFormComponent from '../../../components/auth/LoginFormComponent';
import renderer from 'react-test-renderer';
import React from 'react'
import configureMockStore from 'redux-mock-store'
import {Provider} from 'react-redux'
import {Route} from 'react-router-dom'
import BrowserRouter from 'react-router-dom/BrowserRouter';

const mockStore = configureMockStore();

describe('Snapshot components testing', () => {
    describe('LoginFormComponent', () => {
        it("should render login form", () => {
            const tree = renderer.create(
                <Provider
                    store={mockStore({})}><BrowserRouter><Route><LoginFormComponent/></Route></BrowserRouter></Provider>
            ).toJSON();
            expect(tree).toMatchSnapshot();
        });
    })
});