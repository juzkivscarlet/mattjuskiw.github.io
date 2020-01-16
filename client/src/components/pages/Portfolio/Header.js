import React from 'react';
import { Jumbotron } from 'react-bootstrap';
import './style.css';

function Header() {
	return (
		<Jumbotron className='text-dark text-center' fluid>
			<h1 className='display-4'>My Portfolio</h1>
			<hr className='my-4' />
			<p className='lead text-center'>
				Here are some projects I've recently worked on.
				Click the title of the project to view the source code on GitHub, or click the button to see the project deployed.
			</p>
		</Jumbotron>
	)
}

export default Header;