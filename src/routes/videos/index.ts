import { Router } from 'express';
import {
	getVideosController,
	createVideoController,
	findVideoController,
	deleteVideoController,
	updateVideoController,
} from '../../controllers';

const router = Router();

router.get('/', getVideosController);
router.post('/', createVideoController);
router.put('/:id', updateVideoController);
router.get('/:id', findVideoController);
router.delete('/:id', deleteVideoController);

export default router;
