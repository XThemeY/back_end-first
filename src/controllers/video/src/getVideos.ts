import { Request, Response } from 'express';
import { db } from '../../../db/db';
import { inputValidation } from '../../../validation';

export const getVideosController = (
	req: Request,
	res: Response<OutputVideoType[]>
) => {
	const videos = db.videos; // получаем видео из базы данных

	res.status(200).json(videos); // отдаём видео в качестве ответа
};
