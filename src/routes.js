import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/Home/App';

export default (
	<Route path="/" component={App}>
		<IndexRoute />
	</Route>
);
