import merge from 'lodash/merge'
import { routerReducer as routing } from 'react-router-redux'
import { combineReducers } from 'redux'

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
const router = (state = { pathname: '/' }, action) => {
  switch (action.type) {
    case 'UPDATE_ROUTER_STATE':
      return action.state
    default:
      return state
  }
}

const rootReducer = combineReducers({
	base,
    router,
	routing
});

export default rootReducer;