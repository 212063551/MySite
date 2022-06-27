import * as React from 'react';

const Home = React.lazy(() => import('@/pages/Home'));
const Agreement = React.lazy(() => import('@/pages/components/Agreement'));
const Page404 = React.lazy(() => import('@/pages/404'));

export { Home, Agreement, Page404 };
