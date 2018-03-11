import React from 'react'
import { configure,mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';
import AddBlogComponent from '../../../components/blogs/AddBlogComponent';
import configureMockStore from 'redux-mock-store'
import {Provider} from 'react-redux'

configure({ adapter: new Adapter() });
const mockStore = configureMockStore();

function setup() {
    const props = {
        postBlog: jest.fn()
    };

    const enzymeWrapper = mount(<Provider store={mockStore({auth:{username:'me'}})}><AddBlogComponent {...props} /></Provider>);

    return {
        props,
        enzymeWrapper
    }
}

describe('components', () => {
    describe('AddBlogComponent', () => {
        it('should render self', () => {
            const { enzymeWrapper } = setup();

            expect(enzymeWrapper.find('button').text()).toBe('Add Blog Message');
        });
    })
});