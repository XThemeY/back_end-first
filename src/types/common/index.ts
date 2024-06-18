import { OutputErrorsType, OutputVideoType } from '@types';
import { Request, Response } from 'express';

export type ParamType = {
	id: string;
};

export type BodyType = {
	title: string;
	author: string;
	availableResolutions: null | string[];
	canBeDownloaded: boolean;
	minAgeRestriction: null | number;
	publicationDate: string;
	createdAt?: string;
};

export type QueryType = {
	search?: string;
};
export type OutputType =
	| void
	| OutputErrorsType
	| OutputVideoType
	| OutputVideoType[];

export const ControllerType = (
	req: Request<ParamType, OutputType, BodyType, QueryType>,
	res: Response<OutputType>
) => {};
