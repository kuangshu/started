import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/Main';
import {
	Router,
	Route,
	useRouterHistory,
	IndexRoute
} from 'react-router';
import { createHashHistory } from 'history';

const appHistory = useRouterHistory(createHashHistory)({ queryKey: false });

import Home from './components/Home/Home'
// Render the main component into the dom
ReactDOM.render((
	<Router history={appHistory}>
		<Route path="/" component={App}>
			<IndexRoute component={Home}/>
		</Route>
	</Router>
), document.getElementById('app'));