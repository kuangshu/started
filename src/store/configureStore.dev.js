import { createStore, applyMiddleware, compose } from 'redux';
//import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import rootReducer from '../containers/rootReducer';
import DevTools from '../containers/Root/DevTools'
import createSagaMiddleware, { END } from 'redux-saga'

const configureStore = preloadedState => {
    const sagaMiddleware = createSagaMiddleware();

    const store = createStore(
        rootReducer,
        preloadedState,
        compose(
            applyMiddleware(sagaMiddleware, createLogger()),
            DevTools.instrument()
        )
    );

    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('../components/Home/reducer', () => {
            const nextRootReducer = require('../components/Home/reducer').default;
            store.replaceReducer(nextRootReducer);
        });
    }
    store.runSaga = sagaMiddleware.run
    store.close = () => store.dispatch(END)
    return store;
};

export default configureStore;
