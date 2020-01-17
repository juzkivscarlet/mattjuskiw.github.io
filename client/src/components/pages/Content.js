import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './style.css';

import Container from '../Container';
import Landing from './Landing';
import Bio from './Bio';
import Portfolio from './Portfolio';
import About from './About';

function Content() {
	return (
		<Container>
			<Router>
				<Route exact path='/' component={Landing} />
				<Route exact path='/bio' component={Bio} />
				<Route exact path='/portfolio' component={Portfolio} />
				<Route exact path='/about' component={About} />
			</Router>
		</Container>
	);
}

export default Content;