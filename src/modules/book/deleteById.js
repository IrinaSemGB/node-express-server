import Book from './Model';
import Author from '../author/Model';

export default async function deleteById(req, res) {
  const { bookId = '' } = req.params;

  console.log(res.body);

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
          .then((result) => {
            if (result) {
              console.log('delete book author updated');
            } else {
              console.log('delete book author NOT updated');
            }
          })
          .catch((error) => {
            console.log(error);
          });
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json('Author get by id error ' + err);
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
