import React from 'react';
import { routes } from '@/routers';
import { useRoutes } from 'react-router-dom';

const App: React.FC = () => {
	const elements = useRoutes(routes);
	return elements;
};

export default App;
