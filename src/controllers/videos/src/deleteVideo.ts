import { db } from '@db';
import { ControllerType } from '@types';

export const deleteVideoController: typeof ControllerType = (req, res) => {
	const id = +req.params.id;
	const videos = db.videos; // получаем видео из базы данных
	const video = videos.find((video) => video.id === id);
	if (!video) {
		res.sendStatus(404);
		return;
	}
	res.sendStatus(204);
};
