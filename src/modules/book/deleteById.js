import Book from './Model';

export default function deleteById(req, res) {
  const bookId = req.params.bookId;

  Book.deleteOne({ _id: bookId })
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json('Book delete error');
    });
}
