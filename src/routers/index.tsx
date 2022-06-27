import { Home, Agreement, Page404, Bottom, Header } from '@/pages';
import { Outlet } from 'react-router-dom';
const routes = [
	{
		path: '/',
		element: <Home />,
		meta: {
			title: '首页',
		},
	},
	{
		path: '/agreement',
		element: (
			<>
				<Header />
				<Outlet />
				<Bottom />
			</>
		),
		meta: {
			title: '登录',
		},
		children: [
			{
				path: '/agreement/statement',
				element: <Agreement />,
				meta: {
					title: '网站声明',
				},
			},
			{
				path: '/agreement/disclaimer',
				element: <Agreement />,
				meta: {
					title: '免责声明',
				},
			},
			{
				path: '/agreement/license',
				element: <Agreement />,
				meta: {
					title: '开源许可协议',
				},
			},
		],
	},
	{
		path: '*',
		element: <Page404 />,
		meta: {
			title: '404',
		},
	},
];

export { routes };
