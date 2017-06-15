import React from 'react'
import { render } from 'react-dom';
import configureStore from './store/configureStore';
import rootSaga from './middleware/saga'
import createHistory from 'history/createBrowserHistory'
import Root from './containers/root'
import registerServiceWorker from './registerServiceWorker';
import 'styles/index.css';
/*import startFetchMock from '../mock/mock';
startFetchMock();*/

const history = createHistory();
const store = configureStore({}, history);
store.runSaga(rootSaga)

render(
    <Root
        store={store}
        history={history}
    />,
    document.getElementById('root')
);
registerServiceWorker();

if (module.hot) {
    module.hot.accept('./containers/root.js', () => {
        const NewRoot = require('./containers/root.js').default;
        render(
            <NewRoot
                store={store}
                history={history}
            />,
            document.getElementById('root')
        );
    });
}
