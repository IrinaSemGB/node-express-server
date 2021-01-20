import Base from './Model';

export default function deleteAll(req, res) {
  Base.deleteMany()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json('Base delete all error');
    });
}
