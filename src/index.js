import 'babel-polyfill';
import React from 'react'
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import configureStore from './store/configureStore';
import rootSaga from './middleware/saga'
import { Provider } from 'react-redux'
import createHistory from 'history/createBrowserHistory'
import App from './containers/App'
import 'styles/index.css';
import { ConnectedRouter } from 'react-router-redux'
/*import startFetchMock from '../mock/mock';
startFetchMock();*/

const history = createHistory();
const store = configureStore({}, history);
store.runSaga(rootSaga)

render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <App/>
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
);

if (module.hot) {
    module.hot.accept('./containers/App.js', () => {
        const NewApp = require('./containers/App.js').default;
        render(
            <AppContainer>
                <Provider store={store}>
                    <ConnectedRouter history={history}>
                        <NewApp />
                    </ConnectedRouter>
                </Provider>
            </AppContainer>,
            document.getElementById('root')
        );
    });
}
