import React from 'react';

import Container from '../Container';
import Landing from './Landing';
import Bio from './Bio';

function Content() {
	return (
		<Container>
			<Landing />
			<Bio />
		</Container>
	);
}

export default Content;