import merge from 'lodash/merge';
import { combineReducers } from 'redux';

const base = (state = '', action) => {
    switch (action.type) {
    case 'FILTER':
        return merge(state, {
            filter: action.filter
        });
    default:
        return state;
    }
};

const rootReducer = {
    base,
};

export default rootReducer;