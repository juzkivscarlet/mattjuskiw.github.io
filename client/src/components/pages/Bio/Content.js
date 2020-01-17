import React from 'react';
import { Card, CardGroup, Col, Row } from 'react-bootstrap';
import './style.css';

function Data(site, type, text, link) {
	this.site = site;
	this.type = type;
	this.text = text;
	this.link = link;

	this.setTag = function() {
		if(type==='newTab') return (<a target='_blank' href={link}>{this.text}</a>);
		else if(type==='text') return (<span>{this.text}</span>);
		else if(type==='hyperlink') return (<span><a href={this.link}>{this.text[0]}</a>{this.text[1]}</span>);
	};
}

function ContactInfo(props) {
	return (
		<div className='row'>
			<dt className='col-sm-4'>{props.item.site}: </dt>
			<dd className='col-sm-8'>
				{props.item.setTag()}
			</dd>
		</div>
	);
}

function Content() {
	const info = [];

	info.push(new Data('LinkedIn', 'newTab', 'Here', 'https://www.linkedin.com/in/matthew-juskiw-5462ab187/'));
	info.push(new Data('GitHub', 'newTab', 'mattjuskiw', 'https://www.github.com/mattjuskiw/'));
	info.push(new Data('Portfolio', 'hyperlink', ['Here', ', or in the sidebar'], '/portfolio'));
	info.push(new Data('Email Address', 'text', 'juskiwmatt@gmail.com'));

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
				<CardGroup className='clearfix text-white' id='basic-info'>

					<Card bg='dark'>
						<Card.Header className='mutalics'>My Skills</Card.Header>
						<Card.Body>
							<Card.Title className='text-center mono'>Skills I'm nurturing: </Card.Title>
							<ul className='list-unstyled'>
								<li>&mdash; HTML & CSS, Bootstrap</li>
								<li>&mdash; Javascript, jQuery</li>
								<li>&mdash; Node.js, Express.js</li>
								<li>&mdash; React.js, Handlebars.js</li>
								<li>&mdash; MySQL, Sequelize</li>
								<li>&mdash; MongoDB, Mongoose</li>
							</ul>
						</Card.Body>
					</Card>

					<Card bg='dark'>
						<Card.Header className='mutalics'>Contact Information</Card.Header>
						<Card.Body>
							<Card.Title className='text-center mono'>You can find me and my work here: </Card.Title>
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