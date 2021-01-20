import Base from './Model';

export default function getAll(req, res) {
  Base.find()
    .exec()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json('Base get all error');
    });
}
