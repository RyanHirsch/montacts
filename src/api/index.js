import { Router as createRouter } from 'express';
import peopleRouter from '../person/routes';
const router = createRouter();

router.use('/people', peopleRouter);

export default router;
