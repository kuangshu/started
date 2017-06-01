import 'babel-polyfill';
import React from 'react'
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import configureStore from './store/configureStore';
import rootSaga from './middleware/saga'
import { Provider } from 'react-redux'
import createHistory from 'history/createBrowserHistory'
import Root from './containers/root'
import 'styles/index.css';
import { ConnectedRouter } from 'react-router-redux'
/*import startFetchMock from '../mock/mock';
startFetchMock();*/

const history = createHistory();
const store = configureStore({}, history);
store.runSaga(rootSaga)

render(
    <AppContainer>
        <Root
            store={store}
            history={history}
        />
    </AppContainer>,
    document.getElementById('root')
);

if (module.hot) {
    module.hot.accept('./containers/root.js', () => {
        const NewRoot = require('./containers/root.js').default;
        render(
            <AppContainer>
                <NewRoot
                    store={store}
                    history={history}
                />
            </AppContainer>,
            document.getElementById('root')
        );
    });
}
