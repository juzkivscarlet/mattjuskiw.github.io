import React from 'react';
import { Nav } from 'react-bootstrap';

function Links() {
	return (
		<Nav className='flex-column'>
			<Nav.Item id='homeLink'>
				<Nav.Link href='#main-bio'>
					home
				</Nav.Link>
			</Nav.Item>

			<Nav.Item id='portfolioLink'>
				<Nav.Link href='#portfolio'>
					proj
				</Nav.Link>
			</Nav.Item>

			<Nav.Item id='aboutLink'>
				<Nav.Link href='#about'>
					?
				</Nav.Link>
			</Nav.Item>
		</Nav>
	);
}

export default Links;