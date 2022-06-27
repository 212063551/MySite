import React, { ReactNode } from 'react';
import label from './index.less';

interface LabelType {
	width?: number | string;
	height?: number;
	content?: ReactNode | string;
	color?: string;
	bg?: string;
	border?: string | object | boolean | number;
	hover?: boolean;
}

const Label: React.FC<LabelType> = (props) => {
	const { content, bg, color, border, height, width } = props;
	return (
		<div
			id='label'
			className={label.label}
			style={{
				color,
				background: bg,
				borderRadius: border ? '2px' : '0px',
				height,
				width,
			}}
		>
			{content ? content : 'Label'}
		</div>
	);
};

export default Label;
