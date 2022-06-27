import React from 'react';
import Header from '@/pages/components/Header';
import home from './index.less';
import Bottom from '@/pages/components/Bottom';
const Home: React.FC = () => {
	return (
		<>
			<Header />
			<div id={home.home}></div>
			<div id={home.homeConter}></div>
			<Bottom />
		</>
	);
};

export default Home;
