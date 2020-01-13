import React from 'react';
import './mobile.css';

function MobileNavbar(props) {
	return (
		<div id='mobileNavbar'>
			<span className='navbar-brand justify-content-around'>
				Matt Juskiw
				<button className='navbar-toggler my-2 my-lg-0' type='button' data-toggle='collapse' data-target='#mobileNavLinks' aria-controls='mobileNavbar' aria-expanded='true' aria-label='Toggle nav'>
					<span className='navbar-toggler-icon' />
				</button>

				<ul className='navbar-nav flex-column navbar navbar-collapse' id='mobileNavLinks'>
					<ul className='nav-item' id='homeLink'>
						<li className='nav-link' href=''>home</li>
					</ul>
					<ul className='nav-item' id='portfolioLink'>
						<li className='nav-link' href=''>portfolio</li>
					</ul>
					<ul className='nav-item' id='aboutLink'>
						<li className='nav-link' href=''>more about me</li>
					</ul>
				</ul>
			</span>
		</div>
	);
}

export default MobileNavbar;