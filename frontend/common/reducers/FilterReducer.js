import { SET_FILTER } from '../actions'

const FilterReducer = (state = '', action) => {
    switch (action.type) {
        case SET_FILTER:
            return action.filterString;
        default:
            return state
    }
};

export default FilterReducer