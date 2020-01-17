import React from 'react';
import './style.css';

function Container(props) {
	return (
		<div className='body container-fluid'>
			{props.children}
		</div>
	);
}

export default Container;