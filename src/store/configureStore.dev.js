import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { routerReducer, routerMiddleware } from 'react-router-redux'
import rootReducer from '../containers/rootReducer';
import createSagaMiddleware, { END } from 'redux-saga'
import createLogger from 'redux-logger';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const configureStore = (preloadedState, history) => {
    const sagaMiddleware = createSagaMiddleware();
    const middleware = routerMiddleware(history);

    const store = createStore(
        combineReducers({
            ...rootReducer,
            router: routerReducer,
        }),
        preloadedState,
        composeEnhancers(
            applyMiddleware(sagaMiddleware, createLogger()),
        )
    );

    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('../containers/rootReducer.js', () => {
            const nextRootReducer = require('../containers/rootReducer.js').default;
            store.replaceReducer(nextRootReducer);
        });
    }
    store.runSaga = sagaMiddleware.run
    store.close = () => store.dispatch(END)
    return store;
};

export default configureStore;
