import React from 'react';
import { Nav } from 'react-bootstrap';

function Links() {
	return (
		<Nav className='flex-column'>
			<Nav.Item id='homeLink'>
				<Nav.Link href='/bio' className={window.location.pathname==='/bio' ? 'nav-link active' : 'nav-link'}>
					bio
				</Nav.Link>
			</Nav.Item>

			<Nav.Item id='portfolioLink'>
				<Nav.Link href='/portfolio' className={window.location.pathname==='/portfolio' ? 'nav-link active' : 'nav-link'}>
					proj
				</Nav.Link>
			</Nav.Item>

			<Nav.Item id='aboutLink'>
				<Nav.Link href='/about' className={window.location.pathname==='/about' ? 'nav-link active' : 'nav-link'}>
					?
				</Nav.Link>
			</Nav.Item>
		</Nav>
	);
}

export default Links;