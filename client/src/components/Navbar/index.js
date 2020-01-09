import React from 'react';
import './desktop.css';

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
						<a className='nav-link' href='#main-bio' data-container='body' data-toggle='popover' data-placement='right' data-content='Home page'>
							home
						</a>
					</li>

					<li className='nav-item' id='portfolioLink'>
						<a className='nav-link' href='#portfolio' data-container='body' data-toggle='popover' data-placement='right' data-content='Portfolio'>
							proj
						</a>
					</li>

					<li className='nav-item' id='aboutLink'>
						<a className='nav-link' href='#about' data-container='body' data-toggle='popover' data-placement='right' data-content='More about me'>
							?
						</a>
					</li>
				</ul>
			</div>

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
		</nav>
	);
}

export default Navbar;