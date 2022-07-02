import classnames from 'classnames';
import React from 'react';
import label from './index.less';

type LebelType = {
	src: string;
	message: string;
};

const Label: React.FC<LebelType> = (props) => {
	const { src, message } = props;
	return (
		<>
			<div className={classnames(label.home)}>
				<img src={src} alt='' />
				<span>{message}</span>
			</div>
		</>
	);
};

export default Label;
