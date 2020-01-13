import React from 'react';
import { Navbar } from 'react-bootstrap';
import './desktop.css';

import Corner from './Corner';
import Links from './Links';
import MobileNavbar from './mobile';

function Navigator(props) {
	return (
		<Navbar variant='dark' className='border-right border-light'>

			<Navbar.Brand className='fixed-top'>
				<Navbar.Collapse>
					<a href='/' style={{textDecoration:'none'}}>
						<Corner />
					</a>
				</Navbar.Collapse>
			</Navbar.Brand>

			<Navbar.Collapse id='navbar'>
				<Links />
			</Navbar.Collapse>

			<MobileNavbar />

		</Navbar>
	);
}

export default Navigator;