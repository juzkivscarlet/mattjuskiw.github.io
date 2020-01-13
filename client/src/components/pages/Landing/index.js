import React from 'react';
import { Jumbotron } from 'react-bootstrap';
import './style.css';

function Landing() {
	return (
		<div id='landing'>
			<Jumbotron className='text-center bg-dark' id='landingJumbo'>
				<h1 className='display-4'>
					Matt Juskiw <small className='text-muted font-italic'>- Web Developer</small>
				</h1>

				<p className='lead'>
					I am a 20-year old aspiring web developer from the Cleveland, Ohio area. 
					I am currently enrolled in the Full-Stack Web Development Bootcamp at Case Western Reserve University until February 2020.
				</p>
			</Jumbotron>
		</div>
	);
}

export default Landing;