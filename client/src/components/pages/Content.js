import React from 'react';

import Container from '../Container';
import Landing from './Landing';
import Bio from './Bio';
import Portfolio from './Portfolio';

function Content() {
	return (
		<Container>
			<Landing />
			<Bio />
			<Portfolio />
		</Container>
	);
}

export default Content;