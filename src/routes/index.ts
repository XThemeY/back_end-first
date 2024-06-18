import { Router } from 'express';
import videosRouter from './videos';
import testingRouter from './testing';

const router = Router();

router.use('/videos', videosRouter);
router.use('/testing', testingRouter);

export default router;
