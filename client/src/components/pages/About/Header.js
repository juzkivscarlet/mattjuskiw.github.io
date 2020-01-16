import React from 'react';
import { Jumbotron } from 'react-bootstrap';
import './style.css';

function Header() {
	return (
		<Jumbotron className='text-dark' fluid>
			<h1 className='display-4 text-center'>More About Me</h1>
		</Jumbotron>
	);
}

export default Header;