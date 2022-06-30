import React, { useEffect, useState } from 'react';
import classnames from 'classnames';
import notification from './index.less';

type NotificationType = {
	type?: string;
	children?: string;
	ghost?: boolean;
	show?: boolean;
	content: string;
	title: string;
};

const Notification: React.FC<NotificationType> = (props) => {
	const [state, setState] = useState<boolean>();
	const { show, content, title } = props;
	useEffect(() => {
		setState(show);
	}, [show]);

	const off = (props: any) => {
		setState(!show);
	};

	return (
		<>
			<div
				className={classnames(notification.home, {
					[notification.show]: state,
				})}
			>
				<header className={notification.header}>
					<h4>{title}</h4>

					<svg
						onClick={off}
						className='icon'
						viewBox='0 0 1024 1024'
						version='1.1'
						xmlns='http://www.w3.org/2000/svg'
						p-id='2202'
						width='16'
						height='16'
					>
						<path
							d='M806.4 263.2l-45.6-45.6L512 467.2 263.2 217.6l-45.6 45.6L467.2 512 217.6 760.8l45.6 45.6L512 557.6l248.8 248.8 45.6-45.6L557.6 512z'
							p-id='2203'
							fill='#707070'
						></path>
					</svg>
				</header>
				<div className={classnames(notification.content)}>{content}</div>
			</div>
		</>
	);
};

export default Notification;
