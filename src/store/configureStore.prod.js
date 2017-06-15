import { createStore, combineReducers, applyMiddleware } from 'redux'
import { routerReducer, routerMiddleware } from 'react-router-redux'
import rootReducer from '../containers/rootReducer'
import createSagaMiddleware, { END } from 'redux-saga'

const configureStore = (preloadedState, history) => {
    const sagaMiddleware = createSagaMiddleware();
    const rm = routerMiddleware(history);

    const store = createStore(
		combineReducers({
            ...rootReducer,
            router: routerReducer,
        }),
		preloadedState,
		applyMiddleware(sagaMiddleware, rm)
	)

    store.runSaga = sagaMiddleware.run
    store.close = () => store.dispatch(END)
    return store
}
export default configureStore
