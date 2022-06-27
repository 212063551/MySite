export const proxy = require('http-proxy-middleware');

module.exports = function (app: { use: (API: any) => void }) {
	app.use(
		proxy('/api/v1', {
			target: 'http://localhost:6005',
			changeOrigin: true,
			pathRewrite: { '^/api/v1': '' },
		})
	);
};
