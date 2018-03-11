import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../../actions/index'

let BlogFilterComponent = ({setFilter}) => {
    let input;

    function handleChange(event) {
        setFilter(event.target.value);
    }

    return <div>Filter:<input type='text' onChange={handleChange}/></div>
};

BlogFilterComponent = connect(undefined, actions)(BlogFilterComponent);

export default BlogFilterComponent
