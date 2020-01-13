import React from 'react';
import './App.css';
import './mobile.css';

import Wrapper from './components/Wrapper';
import Navigator from './components/Navigator';
import Content from './components/pages/Content';

function App() {
	return (
		<Wrapper>
			<Navigator />
			<Content />
		</Wrapper>
	);
}

export default App;
