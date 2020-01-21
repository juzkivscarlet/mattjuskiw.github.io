import React from 'react';
import { Jumbotron } from 'react-bootstrap';
import './style.css';

function Header() {
	return (
		<Jumbotron className='header'>
			<h1 className='display-4 mono'>More About Me</h1>
		</Jumbotron>
	);
}

export default Header;