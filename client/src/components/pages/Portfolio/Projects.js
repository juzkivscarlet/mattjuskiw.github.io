import React from 'react';
import { Card, CardColumns } from 'react-bootstrap';
import './style.css';

import projects from './config';

function ProjectWrapper(props) {
	return (
		<CardColumns id='otherProjects'>
			{props.children}

			<Card className='bg-dark p-3 text-white'>
				<blockquote className='blockquote mb-0 card-body'>
					<p className='text-center font-italic'>More to come!</p>
				</blockquote>
			</Card>
		</CardColumns>
	);
}

function ProjectCard(props) {
	const proj = props.proj;

	return (
		<Card className='bg-dark text-white'>
			<Card.Header className='text-muted font-italic'>{proj.type}</Card.Header>
			<img className='card-img-top' src={proj.thumbnail} alt={proj.name} />

			<Card.Body>
				<Card.Title>
					<a href={proj.github} target='_blank'>{proj.name}</a>
				</Card.Title>

				<Card.Text>
					{proj.desc}

				</Card.Text>
				
				<small className='text-muted font-italic'>Technologies used: </small>
				<ul className='list-group list-group-flush bg-dark'>
					{proj.tech.map((tech, i) => {
						return (
							<li key={i} className='list-group-item bg-dark'>{tech}</li>
						);
					})}
				</ul>
			</Card.Body>

			<Card.Body className='text-center'>
					<a href={proj.link} className='btn btn-primary' target='_blank'>
						See <span className='font-italic'>{proj.name}</span>!
					</a>
			</Card.Body>

			<Card.Footer className='text-muted text-right'>
				{proj.date}
			</Card.Footer>
		</Card>
	);
}

function Projects() {
	return (
		<ProjectWrapper>
			{projects.map((proj, i) => {
				if(proj.featured===false) {
					return (
						<ProjectCard key={i} proj={proj} />
					);
				}
			})}
		</ProjectWrapper>
	);
}

export default Projects;