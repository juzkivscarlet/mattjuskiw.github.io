import React from 'react';
import { Jumbotron } from 'react-bootstrap';
import './style.css';

function Landing() {
	return (
		<div id='landing'>
			<Jumbotron className='text-center bg-dark text-light' id='landing-jumbo'>
				<h1 className='display-4'>
					Matt Juskiw <small className='text-muted font-italic'>- Web Developer</small>
				</h1>

				<p className='lead'>
					I am an enthusiastic aspiring web developer from the Cleveland, Ohio area. 
					I was recently certified by the Full-Stack Web Development Bootcamp at Case Western Reserve University.
				</p>
			</Jumbotron>
		</div>
	);
}

export default Landing;