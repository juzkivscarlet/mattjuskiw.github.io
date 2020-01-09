import React from 'react';
import './desktop.css';

import MobileNavbar from './mobile';

function Navbar(props) {
	return (
		<nav className='navbar navbar-expand-lg navbar-dark border-right border-light'>
			<div className='navbar-brand fixed-top navbar-collapse collapse'>
				<a href='/' style={{textDecoration:'none'}}>
					<ul className='navbar-nav flex-column'>
						<li>J</li>
						<li>u</li>
						<li>s</li>
						<li>k</li>
						<li>i</li>
						<li>w</li>
					</ul>
				</a>
			</div>

			<div id='navbar' className='collapse navbar-collapse'>
				<ul className='navbar-nav flex-column'>
					<li className='nav-item' id='homeLink'>
						<a className='nav-link' href='#main-bio'>
							home
						</a>
					</li>

					<li className='nav-item' id='portfolioLink'>
						<a className='nav-link' href='#portfolio'>
							proj
						</a>
					</li>

					<li className='nav-item' id='aboutLink'>
						<a className='nav-link' href='#about'>
							?
						</a>
					</li>
				</ul>
			</div>

			<MobileNavbar />
		</nav>
	);
}

export default Navbar;