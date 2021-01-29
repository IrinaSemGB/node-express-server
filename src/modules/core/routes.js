import infoRouter from '../info/Routes';
import homeRouter from '../home/Routes';
import userRouter from '../user/Routes';
import baseRouter from '../base/Routes';
import bookRouter from '../book/Routes';
import authorRouter from '../author/Routes';
import clientRouter from '../client/Routes';

export default function routes(app) {
  app.use('/info', infoRouter);
  app.use('/', homeRouter);
  app.use('/user', userRouter);
  app.use('/base', baseRouter);
  app.use('/book', bookRouter);
  app.use('/author', authorRouter);
  app.use('/client', clientRouter);
}
