import { ALL } from 'dns';

export const SETTINGS = {
	PORT: process.env.PORT ?? 8080,
	PATH: {
		GLOBALURL: '/hometask_01/api',
		VIDEOS: '/videos',
		TESTING: '/testing',
	},
};
