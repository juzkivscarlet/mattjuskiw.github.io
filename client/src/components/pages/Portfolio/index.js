import React from 'react';
import './style.css';

import Header from './Header';
import Featured from './Featured';
import Projects from './Projects';

function Portfolio() {
	return (
		<div id='portfolio'>
			<Header />
			<hr className='my-4' />

			<Featured />
			<Projects />
		</div>
	);
}

export default Portfolio;