import React, { useState } from 'react';
import Header from '@/pages/components/Header';
import Notification from '@/components/Notification';
import home from './index.less';
import Bottom from '@/pages/components/Bottom';
const Home: React.FC = () => {
	const [state, setState] = useState<boolean>(false);
	return (
		<>
			<Header />
			<div id={home.home}></div>
			<div id={home.homeConter}>
				<Notification
					show={state}
					content='kjhjkhjhkjh计划计划jkhkjhjk'
					title='12312312'
				/>
			</div>
			<Bottom />
		</>
	);
};

export default Home;
