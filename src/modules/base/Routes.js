import { Router } from 'express';
import create from './create';
import search from './search';
import getById from './getById';
import updateById from './updateById';
import deleteById from './deleteById';
import deleteAll from './deleteAll';

const router = Router();

router.post('/', create);
router.post('/search', search);
router.get('/:baseId', getById);
router.patch('/:baseId', updateById);
router.delete('/:baseId', deleteById);
router.delete('/', deleteAll);

export default router;
