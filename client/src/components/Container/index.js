import React from 'react';
import './style.css';

function Container(props) {
	return (
		<div className='body container-fluid' data-spy='scroll' data-target='.navbar' data-offset='50' >
			{props.children}
		</div>
	);
}

export default Container;