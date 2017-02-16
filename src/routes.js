import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './containers/App';
import Index from './components/Home/Index';

export default (
	<Route path="/vip" component={App}>
		<IndexRoute component={Index} />
	</Route>
);
