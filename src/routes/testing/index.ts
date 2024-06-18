import { Router } from 'express';
import { deleteDataController } from '../../controllers';

const router = Router();

router.delete('/all-data', deleteDataController);

export default router;
