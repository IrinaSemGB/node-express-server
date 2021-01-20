import { Router } from 'express';
import create from './create';
import getAll from './getAll';
import getById from './getById';
import updateById from './updateById';
import deleteById from './deleteById';
import deleteAll from './deleteAll';

const router = Router();

router.post('/', create);
router.get('/getAll', getAll);
router.get('/:baseId', getById);
router.patch('/:baseId', updateById);
router.delete('/:baseId', deleteById);
router.delete('/', deleteAll);

export default router;
