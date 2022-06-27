import axios from '@/utils/request';

export const failApi = (data: any) => {
	return axios({
		url: '/api/v1/FindEssay',
		method: 'post',
		data,
	});
};
