import * as React from 'react';

const Home = React.lazy(() => import('@/pages/Home'));
const Agreement = React.lazy(() => import('@/pages/Agreement'));
const Page404 = React.lazy(() => import('@/pages/404'));
const Header = React.lazy(() => import('@/pages/components/Header'));
const Bottom = React.lazy(() => import('@/pages/components/Bottom'));

export { Home, Agreement, Page404, Bottom, Header };
