import { db } from '@db';
import { inputValidation } from '../../../validation';
import { ControllerType, VideoDBType } from '@types';

export const createVideoController: typeof ControllerType = (req, res) => {
	const errors = inputValidation(req.body);

	if (errors.errorsMessages?.length) {
		// если есть ошибки - отправляем ошибки
		res.status(400).json(errors);
		return;
	}

	// если всё ок - добавляем видео
	const createDate = new Date();
	const publicationDate = new Date(
		new Date().setDate(createDate.getDate() + 1)
	);

	const newVideo: VideoDBType = {
		...req.body,
		id: Date.now() + Math.random(),
		canBeDownloaded: false,
		minAgeRestriction: null,
		createdAt: createDate.toISOString(),
		publicationDate: publicationDate.toISOString(),
	};
	db.videos = [...db.videos, newVideo];

	res.status(201).json(newVideo);
};
