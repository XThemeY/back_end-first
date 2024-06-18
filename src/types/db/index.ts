export type VideoDBType = {
	id: number;
	title: string;
	author: string;
	canBeDownloaded: boolean;
	minAgeRestriction: null | number;
	createdAt: string;
	publicationDate: string;
	availableResolutions: null | string[];
};

export type DBType = {
	// типизация базы данных
	videos: VideoDBType[];
	// some: any[]
};
