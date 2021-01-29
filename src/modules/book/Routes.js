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
router.get('/:bookId', getById);
router.patch('/:bookId', updateById);
router.delete('/:bookId', deleteById); //localhost:5000/book/указать ID
router.delete('/', deleteAll);

export default router;
