import Book from './Model';

export default function deleteAll(req, res) {
  Book.deleteMany()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json('Book delete all error');
    });
}
