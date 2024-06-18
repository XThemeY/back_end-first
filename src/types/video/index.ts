import { VideoDBType } from '@types';

export type OutputVideoType = VideoDBType;

export type InputVideoType = CreateVideoType & UpdateVideoType;

export type CreateVideoType = {
	title: string;
	author: string;
	availableResolutions: null | string[];
};

export type UpdateVideoType = {
	title: string;
	author: string;
	availableResolutions: null | string[];
	canBeDownloaded?: boolean;
	minAgeRestriction?: null | number;
	publicationDate?: string;
	createdAt?: string;
};
