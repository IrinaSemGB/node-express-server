import Author from './Model';

export default function deleteAll(req, res) {
  Author.deleteMany()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json('Author delete all error');
    });
}
