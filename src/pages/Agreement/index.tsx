import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import agreement from './index.less';

const Agreement: React.FC = (props) => {
	const [state, setState] = useState<string>('');
	const location = useLocation();
	const locations = location.pathname;
	useEffect(() => {
		if (locations === '/agreement/statement') {
			return setState('网站声明');
		}
		if (locations === '/agreement/disclaimer') {
			return setState('免责声明');
		}
		if (locations === '/agreement/license') {
			return setState('开源许可协议');
		}
	}, [locations]);

	return (
		<>
			<header id={agreement.header}>
				<div>
					<span>首页</span>
					<span>{'>'}</span>
					<span>{state}</span>
				</div>
			</header>
			<div id={agreement.content}>
				<div>
					<h3>版权与免责声明</h3>
					<p>最近修订日期：2021年07月</p>
				</div>
			</div>
		</>
	);
};

export default Agreement;
