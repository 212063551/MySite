import React, { useState } from 'react';
import classnames from 'classnames';
import tooltip from './index.less';

interface TooltipType {
	children?: any;
	title: string;
}

const Tooltip: React.FC<TooltipType> = (props) => {
	const [state, setState] = useState<boolean>(true);
	const { children, title } = props;
	const show = () => {
		setState(false);
	};
	const hide = () => {
		setState(true);
	};

	return (
		<>
			<div className={classnames(tooltip.tooltip)}>
				<span
					className={classnames(tooltip.home, {
						[tooltip.show]: state,
					})}
				>
					{title}
				</span>
				<span onMouseMoveCapture={show} onMouseOutCapture={hide}>
					{children}
				</span>
			</div>
		</>
	);
};

export default Tooltip;
