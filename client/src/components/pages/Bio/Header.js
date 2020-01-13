import React from 'react';
import { Jumbotron } from 'react-bootstrap';
import './style.css';

function Header() {
	return (
		<Jumbotron className='text-dark text-center' fluid>
			<h1 className='display-4'>
				Matt Juskiw <span className='font-italic'>- web developer</span>
			</h1>
		</Jumbotron>
	);
}

export default Header;