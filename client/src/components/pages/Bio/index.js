import React from 'react';
import './style.css';

import Header from './Header';
import Content from './Content';

function Bio() {
	return (
		<div id='main-bio'>
			<Header />
			<hr className='my-4' />

			<Content />
		</div>
	);
}

export default Bio;