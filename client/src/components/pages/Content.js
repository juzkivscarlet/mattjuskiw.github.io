import React from 'react';

import Container from '../Container';
import Landing from './Landing';
import Bio from './Bio';
import Portfolio from './Portfolio';
import About from './About';

function Content() {
	return (
		<Container>
			<Landing />
			<Bio />
			<Portfolio />
			<About />
		</Container>
	);
}

export default Content;