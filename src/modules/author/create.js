import Author from './Model';
import Book from '../book/Model';
import mongoose from 'mongoose';

export default async function create(req, res) {
  const newAuthorId = new mongoose.Types.ObjectId();
  const books = req.body.books;
  const newBooks = [];

  // Update books
  const promisesAuthorGetById = books.map((book) =>
    Book.findByIdAndUpdate(book, { $addToSet: { authors: newAuthorId } })
      .exec()
      .then((result) => {
        if (result) {
          newBooks.push(book);
          console.log(`Book ${book} was created`);
        } else {
          console.log(`Book ${book} was not created`);
        }
      })
      .catch((err) => {
        console.log(err);
        res.status(400).json('Book update error');
      }),
  );

  const promiseResults = await Promise.all(promisesAuthorGetById);
  console.log(promiseResults);

  // Create Author
  const newAuthor = new Author({
    _id: newAuthorId,
    name: req.body.name,
    books: newBooks,
  });

  newAuthor
    .save()
    .then(() => {
      res.status(200).json('Author created');
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json('Author not created');
    });
}
