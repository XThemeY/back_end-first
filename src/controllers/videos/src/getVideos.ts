import { db } from '@db';
import { ControllerType } from '@types';

export const getVideosController: typeof ControllerType = (req, res) => {
	const videos = db.videos; // получаем видео из базы данных

	res.status(200).json(videos); // отдаём видео в качестве ответа
};
