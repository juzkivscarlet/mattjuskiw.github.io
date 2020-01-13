import React from 'react';
import { Card, CardGroup, Col, Row } from 'react-bootstrap';
import './style.css';

import Header from './Header';
import Content from './Content';

function Bio() {
	return (
		<div>
			<Header />
			<hr className='my-4' />

			<Content />
		</div>
	);
}

export default Bio;