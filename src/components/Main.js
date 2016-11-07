require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';

class AppComponent extends React.Component {
	render() {
		return (
			<div className="index">
				<div className="notice">Please edit <code>src/components/Main.js</code> to get started!</div>
				{this.props.children}
			</div>
		);
	}
}

AppComponent.defaultProps = {};

export default AppComponent;