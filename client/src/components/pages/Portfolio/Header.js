import React from 'react';
import { Container, Jumbotron } from 'react-bootstrap';
import './style.css';

function Header() {
	return (
		<Jumbotron className='text-dark text-center'>
			<Container>
				<h1 className='display-4'>My Portfolio</h1>
				<hr className='my-4' />
				<p className='lead text-center'>
					Here are some projects I've recently worked on.
					Click the title of the project to view the source code on GitHub, or click the button to see the project deployed.
				</p>
			</Container>
		</Jumbotron>
	)
}

export default Header;