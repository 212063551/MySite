import React, { useState } from 'react';
import Header from '@/pages/components/Header';
import home from './index.less';
import Bottom from '@/pages/components/Bottom';
import Label from '@/components/Label';
import Tooltip from '@/components/Tooltip';
const Home: React.FC = () => {
	const [state, setState] = useState<boolean>(false);
	const data = [
		{
			id: 1,
			icon: 'https://cdn.ncxicn.cn/Web/typescript.webp',
			title: '可扩展',
			content:
				'Umi 实现了完整的生命周期，并使其插件化，Umi 内部功能也全由插件完成。此外还支持插件和插件集，以满足功能和垂直域的分层需求。',
		},
		{
			id: 2,
			icon: 'https://cdn.ncxicn.cn/Web/javascript.webp',
			title: '可扩展',
			content:
				'Umi 实现了完整的生命周期，并使其插件化，Umi 内部功能也全由插件完成。此外还支持插件和插件集，以满足功能和垂直域的分层需求。',
		},
		{
			id: 3,
			icon: 'https://cdn.ncxicn.cn/Web/React.webp',
			title: '前端框架',
			content:
				'Umi 实现了完整的生命周期，并使其插件化，Umi 内部功能也全由插件完成。此外还支持插件和插件集，以满足功能和垂直域的分层需求。',
		},
		{
			id: 4,
			icon: 'https://cdn.ncxicn.cn/Web/selfLnnovate.webp',
			title: '流程化开发',
			content:
				'Umi 实现了完整的生命周期，并使其插件化，Umi 内部功能也全由插件完成。此外还支持插件和插件集，以满足功能和垂直域的分层需求。',
		},
		{
			id: 5,
			icon: 'https://cdn.ncxicn.cn/Web/API.webp',
			title: '可扩展',
			content:
				'Umi 实现了完整的生命周期，并使其插件化，Umi 内部功能也全由插件完成。此外还支持插件和插件集，以满足功能和垂直域的分层需求。',
		},
		{
			id: 6,
			icon: 'https://gw.alipayobjects.com/zos/basement_prod/a1c647aa-a410-4024-8414-c9837709cb43/k7787itw_w126_h114.png',
			title: '可扩展',
			content:
				'Umi 实现了完整的生命周期，并使其插件化，Umi 内部功能也全由插件完成。此外还支持插件和插件集，以满足功能和垂直域的分层需求。',
		},
	];
	return (
		<>
			<Header />
			<div id={home.home}>
				<div>
					<h1>前端技术宅</h1>
					<p>开源网站</p>
					<a href='#!'>
						<button>Start</button>
					</a>
				</div>
			</div>
			<div id={home.homeConter}>
				<div className={home.homeContents}>
					{data.map((item, index) => {
						return (
							<div key={index}>
								<img src={item.icon} alt='' />
								<h3>{item.title}</h3>
								<p>{item.content}</p>
							</div>
						);
					})}
				</div>
			</div>
			<div id={home.Introduction}>
				<h3>站长介绍</h3>
				<div id={home.Me}>
					<span className={home.Me}>
						<header>
							<span className={home.Label}>在校大学生</span>
							<span className={home.Label}>计算机专业</span>
							<span className={home.Label}>前端开发者</span>
							<span className={home.Label}>React开发者</span>
						</header>
						<p>能使用MySQL,Node,Koa，TypeScript等新技术</p>
						<p>能基于Node.JS,Koa，Egg等开发后端接口</p>
						<p>接受新技术能力较强，学习新技术能力较强</p>
						<p>
							当前状态：
							{state ? '已入职' : '求职中'}
						</p>
						<span id={home.examine}>
							<Tooltip title='注意：请联系站长获取密码后查看！'>
								<a href='#!'>
									<button>查看简历</button>
								</a>
							</Tooltip>
						</span>
					</span>
				</div>
			</div>
			<div id={home.demonstrate}>
				<Label src={'https://cdn.ncxicn.cn/Web/bg.webp'} message={'2134567'} />
				<Label src={'https://cdn.ncxicn.cn/Web/bg.webp'} message={'2134567'} />
				<Label src={'https://cdn.ncxicn.cn/Web/bg.webp'} message={'2134567'} />
				<Label src={'https://cdn.ncxicn.cn/Web/bg.webp'} message={'2134567'} />
				<Label src={'https://cdn.ncxicn.cn/Web/bg.webp'} message={'2134567'} />
				<Label src={'https://cdn.ncxicn.cn/Web/bg.webp'} message={'2134567'} />
				<span id={home.batch}>
					<span>
						<svg
							className={home.spinIcon}
							viewBox='0 0 1024 1024'
							version='1.1'
							xmlns='http://www.w3.org/2000/svg'
							p-id='6531'
							width='10'
							height='10'
						>
							<path
								d='M875.47 261.77l100.78-53.34-54.38 176.68-176.67-54.39 98.34-52.05 31.93-16.9z'
								p-id='6532'
							></path>
							<path
								d='M875.47 261.771l-15.91 8.42-16.02 8.48c-76.23-109.19-200.91-174.3-333.97-174.3-217.91 0-396.49 170.36-406.55 387.84-0.3 6.4-0.45 12.84-0.45 19.16 0 9.94-8.06 18-18 18s-18-8.06-18-18c0-6.88 0.17-13.89 0.49-20.83 5.27-113.9 53.64-220.16 136.2-299.21 82.83-79.29 191.61-122.96 306.31-122.96 72.96 0 145.3 18.12 209.19 52.41 61.85 33.19 115.66 81.32 155.61 139.18 0.41 0.59 0.77 1.2 1.1 1.81zM874.372 259.966zM149.628 763.717z'
								p-id='6533'
							></path>
							<path
								d='M180.46 745.01l98.34-52.05-176.67-54.39-54.38 176.68 100.78-53.34 31.93-16.9z'
								p-id='6534'
							></path>
							<path
								d='M957.43 512.311c0 6.88-0.17 13.89-0.49 20.83-5.27 113.9-53.64 220.16-136.2 299.21-82.83 79.29-191.61 122.96-306.31 122.96-72.96 0-145.3-18.12-209.19-52.41-61.85-33.19-115.66-81.32-155.61-139.18-0.41-0.59-0.77-1.2-1.1-1.81l15.91-8.42 16.02-8.48c76.23 109.19 200.91 174.3 333.97 174.3 217.91 0 396.49-170.36 406.55-387.84 0.3-6.4 0.45-12.84 0.45-19.16 0-9.94 8.06-18 18-18s18 8.06 18 18z'
								p-id='6535'
							></path>
						</svg>
						换一批
					</span>
					<span>
						查看更多
						<svg
							className='icon'
							viewBox='0 0 1024 1024'
							version='1.1'
							xmlns='http://www.w3.org/2000/svg'
							p-id='10092'
							width='12'
							height='12'
						>
							<path
								d='M389.61 731.04c-9.84 0-19.57-4.43-25.99-12.87-10.92-14.34-8.15-34.82 6.19-45.74l244.82-186.39c14.33-10.91 34.83-8.16 45.74 6.19 10.92 14.34 8.15 34.82-6.19 45.74l-244.82 186.4a32.517 32.517 0 0 1-19.75 6.67z'
								p-id='10093'
								fill='#bfbfbf'
							></path>
							<path
								d='M634.39 544.65c-6.9 0-13.84-2.17-19.75-6.67l-244.82-186.4c-14.34-10.92-17.12-31.4-6.19-45.74 10.91-14.35 31.4-17.13 45.74-6.19l244.82 186.4c14.34 10.92 17.12 31.4 6.19 45.74-6.42 8.43-16.15 12.86-25.99 12.86z'
								p-id='10094'
								fill='#bfbfbf'
							></path>
						</svg>
					</span>
				</span>
			</div>

			<Bottom />
		</>
	);
};

export default Home;
