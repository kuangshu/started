import React from 'react';
import logo from 'images/svg/logo.svg';
import { Link, Route } from 'react-router-dom'
import { connect } from 'react-redux';
import Home from '../components/Home'

const App = (props) => (
	<div className="App">
		<div className="App-header">
			<svg className="App-logo" alt="logo" >
				<use href={logo}></use>
			</svg>
			<h2>Welcome to React</h2>
		</div>
		{JSON.stringify(props)}
		<p className="App-intro">
		To get started, edit <code>src/containers/App.js</code> and save to reload.
		</p>
		<br/>
		<Link to='/'>index</Link>
		<br/>
		<Link to='/home'>home</Link>
		<br/>
		<Route path='/home' component={Home} />
	</div>
)

function mapStateToProps(state) {
    return {
        state: state,
    };
}
export default connect(mapStateToProps)(App);