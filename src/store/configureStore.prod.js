import { createStore, applyMiddleware } from 'redux'
import rootReducer from '../containers/rootReducer'
import createSagaMiddleware, { END } from 'redux-saga'

const configureStore = preloadedState => {
    const sagaMiddleware = createSagaMiddleware()
    const store = createStore(
		rootReducer,
		preloadedState,
		applyMiddleware(sagaMiddleware)
	)

    store.runSaga = sagaMiddleware.run
    store.close = () => store.dispatch(END)
    return store
}
export default configureStore
