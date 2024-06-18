import { db } from '@db';
import { ControllerType, VideoDBType } from '@types';
import { inputValidation } from '@validation';

export const updateVideoController: typeof ControllerType = (req, res) => {
	const id = +req.params.id;
	const video = db.videos.find((item) => item.id === id);

	if (!video) {
		res.sendStatus(404);
		return;
	}
	req.body.createdAt = video.createdAt;
	const errors = inputValidation(req.body);
	if (errors.errorsMessages?.length) {
		// если есть ошибки - отправляем ошибки
		res.status(400).json(errors);
		return;
	}
	const index = db.videos.indexOf(video);

	// если всё ок - обновляем видео
	const updatedVideo: VideoDBType = {
		...req.body,
		id: video.id,
		createdAt: video.createdAt,
	};

	db.videos[index] = updatedVideo;

	res.sendStatus(204);
};
