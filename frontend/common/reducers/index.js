import {combineReducers} from 'redux'
import BlogsReducer from './BlogsReducer';
import FilterReducer from './FilterReducer';
import AuthReducer from './AuthReducer';
import ErrorReducer from './ErrorReducer';

const rootReducer = combineReducers({
    blogs: BlogsReducer,
    filterString: FilterReducer,
    auth: AuthReducer,
    err: ErrorReducer
});

export default rootReducer
