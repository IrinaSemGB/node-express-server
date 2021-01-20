import { Router } from 'express';
import clientCreate from './clientCreate';
import clientGetAll from './clientGetAll';
import clientGetById from './clientGetById';
import clientUpdateById from './clientUpdateById';
import clientDeleteById from './clientDeleteById';
import clientDeleteAll from './clientDeleteAll';

const router = Router();

router.post('/', clientCreate);
router.get('/', clientGetAll);
router.get('/:clientId', clientGetById);
router.patch('/:clientId', clientUpdateById);
router.delete('/:clientId', clientDeleteById);
router.delete('/', clientDeleteAll);

export default router;
