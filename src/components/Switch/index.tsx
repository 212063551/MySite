import React, { useEffect, useState } from 'react';
import switchs from './index.less';

type Condition = 'daytime' | 'night';
let condition: Condition;

const Switch: React.FC = () => {
	const [state, setState] = useState<any>(false);
	useEffect(() => {
		const conditions = localStorage.getItem('pattern');
		if (conditions) {
			if (conditions === 'daytime') {
				setState(false);
			} else {
				setState(true);
			}
		}
	}, []);
	const switchBottom = () => {
		setState(!state);
		if (state !== false) {
			condition = 'daytime';
		} else {
			condition = 'night';
		}
		localStorage.setItem('pattern', condition);
	};

	return (
		<>
			<div id={switchs.switch} onClick={switchBottom}>
				<div
					id={switchs.switchBottom}
					style={{
						marginLeft: state ? '30px' : '5px',
						background: state ? '#3333' : '#f99808',
					}}
				></div>
			</div>
		</>
	);
};

export default Switch;
