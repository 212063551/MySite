import { Home, Agreement, Page404 } from '@/pages';
const routes = [
	{
		path: '/',
		element: <Home />,
		meta: {
			title: '首页',
		},
	},
	{
		path: '/Agreement',
		element: <Agreement />,
		meta: {
			title: '登录',
		},
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
