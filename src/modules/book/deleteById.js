import Book from './Model';
import Author from '../author/Model';

export default async function deleteById(req, res) {
  const { bookId = '' } = req.params;

  Book.findById(bookId)
    .exec()
    .then((result) => {
      result.authors.forEach((author) => {
        Author.update(
          { _id: author },
          { $pull: { books: bookId } },
          { runValidators: true },
        )
          .exec()
          .then((result) => result)
          .catch((error) => {
            console.log(error);
          });
      });
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(400).json('Book get by id error' + err);
    });

  Book.deleteOne({ _id: bookId })
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json('Book delete error');
    });
}
