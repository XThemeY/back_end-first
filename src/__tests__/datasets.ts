import { DBType, VideoDBType } from '@types';
import { Resolutions } from '@validation';

// готовые данные для переиспользования в тестах

export const video1: VideoDBType = {
	id: Date.now() + Math.random(),
	title: 't' + Date.now() + Math.random(),
	author: 'a' + Date.now() + Math.random(),
	canBeDownloaded: false,
	minAgeRestriction: null,
	createdAt: new Date().toISOString(),
	publicationDate: new Date().toISOString(),
	availableResolutions: null,
};

export const video2: VideoDBType = {
	id: Date.now() + Math.random(),
	title: 't' + Date.now() + Math.random(),
	author: 'a' + Date.now() + Math.random(),
	canBeDownloaded: true,
	minAgeRestriction: null,
	createdAt: new Date().toISOString(),
	publicationDate: new Date().toISOString(),
	availableResolutions: [Resolutions.P240, Resolutions.P1080],
};

export const dataset: DBType = {
	videos: [video1, video2],
};
