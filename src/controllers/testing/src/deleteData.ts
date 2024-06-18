import { db } from '@db';
import { ControllerType } from '@types';

export const deleteDataController: typeof ControllerType = (req, res) => {
	db.videos = [];
	res.sendStatus(204);
};
