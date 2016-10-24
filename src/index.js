import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/Main';
import {
	Router,
	Route,
	hashHistory,
	IndexRoute
} from 'react-router';

import Home from './components/Home/Home'
// Render the main component into the dom
ReactDOM.render((
	<Router history={hashHistory}>
		<Route path="/" component={App}>
			<IndexRoute component={Home}/>
		</Route>
	</Router>
), document.getElementById('app'));