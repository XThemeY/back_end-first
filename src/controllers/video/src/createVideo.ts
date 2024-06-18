import { Request, Response } from 'express';
import { db } from '../../../db/db';
import { inputValidation } from '../../../validation';

export const createVideoController = (
	req: Request<any, any, InputVideoType>,
	res: Response<OutputVideoType | OutputErrorsType>
) => {
	const errors = inputValidation(req.body);
	if (errors.errorsMessages.length) {
		// если есть ошибки - отправляем ошибки
		res.status(400).json(errors);
		return;
	}

	// если всё ок - добавляем видео
	const newVideo: VideoDBType = {
		...req.body,
		id: Date.now() + Math.random(),
		// ...
	};
	db.videos = [...db.videos, newVideo];

	res.status(201).json(newVideo);
};
