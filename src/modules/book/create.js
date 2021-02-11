import Book from './Model';
import Author from '../author/Model';
import mongoose from 'mongoose';

export default async function create(req, res) {
  const newBookId = new mongoose.Types.ObjectId();
  const authors = req.body.authors;
  const purchasePrice = req.body.purchasePrice;
  const sellingPrice = req.body.sellingPrice;
  const newAuthors = [];

  // Update Authors
  const promisesBookGetById = authors.map((author) =>
    Author.findByIdAndUpdate(author, { $addToSet: { books: newBookId } })
      .exec()
      .then((result) => {
        if (result) {
          newAuthors.push(author);
          console.log(`Author ${author} was created`);
        } else {
          console.log(`Author ${author} was not created`);
        }
      })
      .catch((err) => {
        console.log(err);
        res.status(400).json('Author update error');
      }),
  );

  const promiseResults = await Promise.all(promisesBookGetById);
  console.log(promiseResults);

  // Create Book
  const newBook = new Book({
    _id: newBookId,
    name: req.body.name,
    authors: newAuthors,
    purchasePrice: purchasePrice,
    sellingPrice: sellingPrice,
  });

  newBook
    .save()
    .then(() => {
      res.status(200).json('Book created');
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json('Book not created');
    });
}
