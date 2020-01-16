import React from 'react';
import { Card, CardGroup, Col, Row } from 'react-bootstrap';
import './style.css';

import cards from './data';

function SelfieCardTwo() {
	return (
		<Card className='bg-dark text-white'>
			<img src='/assets/Playing-guitar.jpg' className='card-img-top' alt='Playing Guitar' style={{display:'inline-block'}} />
			<Card.Body>
				<Card.Text className='font-italic'>
					I've been playing guitar since I was 7 years old.
				</Card.Text>
			</Card.Body>
		</Card>
	);
}

function InfoCard(props) {
	const data = props.data;
	return (
		<Card className='bg-dark text-white'>
			<Card.Header>{data.header}</Card.Header>

			<Card.Body>
				<Card.Title>{data.title}</Card.Title>
				{data.text.map(text => {
					return (
						<Card.Text>
							{text}
						</Card.Text>
					)
				})}
			</Card.Body>
		</Card>
	);
}

function AboutCards() {
	return (
		<Row>
			<Col lg={9}>
				<CardGroup>
					{cards.map(card => {
						return (
							<InfoCard data={card} />
						)
					})}
				</CardGroup>
			</Col>

			<Col sm={3}>
				<SelfieCardTwo />
			</Col>
		</Row>
	);
}

export default AboutCards;