import { db } from '@db';
import { ControllerType } from '@types';

export const findVideoController: typeof ControllerType = (req, res) => {
	const id = +req.params.id; // получаем id из url
	const video = db.videos.find((item) => item.id === id); // получаем видео из базы данных

	//Если не найдено, то отдаем статус 404
	if (!video) {
		res.sendStatus(404);
		return;
	}

	res.status(200).json(video); // отдаём видео в качестве ответа
};
