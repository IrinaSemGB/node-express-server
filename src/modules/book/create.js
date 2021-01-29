import Book from './Model';
import Author from '../author/Model';
import mongoose from 'mongoose';

export default function create(req, res) {
  const _id = new mongoose.Types.ObjectId();

  const newBook = new Book({
    _id,
    name: req.body.name,
    author: req.body.author,
  });

  // Update Authors
  req.body.author.forEach((author) => {
    Author.findById({ _id: author })
      .exec()
      .then((doc) => {
        console.log(doc);

        doc.book = [...doc.book, _id];
        doc.save().catch((e) => {
          throw new Error(e);
        });
        //res.status(200).json(doc.book);
      })
      .catch((err) => {
        console.log(err);
        res.status(400).json('Author update error');
      });
  });

  // Create Book
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
