import React from 'react';
import { Nav } from 'react-bootstrap';
import './desktop.css';

function Corner() {
	return (
		<Nav className='flex-column' style={{color:'#59fe53'}}>
			<Nav.Item>J</Nav.Item>
			<Nav.Item>u</Nav.Item>
			<Nav.Item>s</Nav.Item>
			<Nav.Item>k</Nav.Item>
			<Nav.Item>i</Nav.Item>
			<Nav.Item>w</Nav.Item>
		</Nav>
	);
}

export default Corner;