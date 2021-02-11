import Author from './Model';
import Book from '../book/Model';

export default function deleteById(req, res) {
  const { authorId = '' } = req.params;

  Author.findById(authorId)
    .exec()
    .then((result) => {
      result.books.forEach((book) => {
        Book.update(
          { _id: book },
          { $pull: { authors: authorId } },
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
      res.status(400).json('Author get by id error' + err);
    });

  Author.deleteOne({ _id: authorId })
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json('Author delete error');
    });
}
