import React from 'react';
import { Card, CardGroup, Col, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faAt, faBriefcase, faCode, faDatabase, faFilePdf, faFolderOpen } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import './style.css';

library.add(fab);

function Data(site, type, icon, text, link) {
	this.site = site;
	this.type = type;
	if(icon) this.icon = icon;
	this.text = text;
	this.link = link;

	this.setTag = function() {
		if(type==='newTab') return (
			<a target='_blank' href={link}>{this.text}</a>
		);
		else if(type==='text') return (
			<span className='font-italic'>
				{this.text}
			</span>
		);
		else if(type==='hyperlink') return (
			<>
				<a href={this.link}>{this.text[0]}</a>
				<span className='font-italic'>
					{this.text[1]}
				</span>
			</>
		);
	};
}

function ContactInfo(props) {
	return (
		<div className='row'>
			<dt className='col-sm-6 w-100'>
				<Row>
					<Col sm={3}>
						{props.item.icon && 
							<FontAwesomeIcon icon={props.item.icon} size='lg' />
						}
					</Col>
					<Col sm={9}>
						{props.item.site}
					</Col>
				</Row>
			</dt>
			<dd className='col-sm-6'>
				{props.item.setTag()}
			</dd>
		</div>
	);
}

function SkillsList() {
	const skills = [
		{
			text: "HTML, CSS, Bootstrap",
			icon: ['fab', 'html5']
		}, {
			text: "Javascript, jQuery",
			icon: ['fab', 'js-square']
		}, {
			text: "Node.js, Express.js",
			icon: ['fab', 'node-js']
		}, {
			text: "ReactJS, Handlebars.js",
			icon: ['fab', 'react']
		}, {
			text: "MySQL, Sequelize, MongoDB, Mongoose",
			icon: faDatabase
		}
	];
	
	return (
		<dl>
			{skills.map((skill, i) => {
				return (
					<Row key={i}>
						<dt className='col-md-2'>
							<FontAwesomeIcon icon={skill.icon} size='lg' />
						</dt>
						<dd className='col-md-10 text-center font-italic mono'>
							{skill.text}
						</dd>
					</Row>
				);
			})}
		</dl>
	);
}

function Content() {
	const info = [];
	
	info.push(new Data('LinkedIn', 'newTab', faBriefcase, 'Here', 'https://www.linkedin.com/in/matthew-juskiw-5462ab187/'));
	info.push(new Data('GitHub', 'newTab', faCode, 'mattjuskiw', 'https://www.github.com/mattjuskiw/'));
	info.push(new Data('Portfolio', 'hyperlink', faFolderOpen, ['Here', ', or in the sidebar'], '/portfolio'));
	info.push(new Data('Email Address', 'text', faAt, 'juskiwmatt@gmail.com'));
	info.push(new Data('Resume', 'newTab', faFilePdf, ['Here', ''], '/assets/Resume.pdf'));

	return (
		<Row id='bio-content'>
			<Col md={3}>
				<Card bg='dark' text='white' id='selfie-card-one'>
					<Card.Img variant='top' src='/assets/Me2.jpeg' />
					<Card.Body>
						<Card.Text className='text-center'>
							Somtimes I like to take selfies in my truck. 
							<br />
							<span className='mutalics'>
								Don't worry, I'm always parked when doing so. 
							</span>
						</Card.Text>
					</Card.Body>
				</Card>
			</Col>

			<Col md={9}>
				<CardGroup className='text-white clearfix' id='basic-info'>

					<Card bg='dark'>
						<Card.Header className='mutalics'>My Skills</Card.Header>
						<Card.Body>
							<Card.Title className='mono'>Skills I'm nurturing: </Card.Title>
							<SkillsList />
						</Card.Body>
					</Card>

					<Card bg='dark'>
						<Card.Header className='mutalics'>Contact Information</Card.Header>
						<Card.Body>
							<Card.Title className='mono'>You can find me and my work here: </Card.Title>
							<dl>
								{info.map((item, i) => {
									return (
										<ContactInfo key={i} item={item} />
									);
								})}
							</dl>
						</Card.Body>
					</Card>

				</CardGroup>
			</Col>

		</Row>
	);
}

export default Content;