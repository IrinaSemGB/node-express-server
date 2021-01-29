import Author from './Model';
import Book from '../book/Model';
import mongoose from 'mongoose';

export default function create(req, res) {
  const _id = new mongoose.Types.ObjectId();
  const newAuthor = new Author({
    name: req.body.name,
    book: req.body.book,
  });

  //Update book
  req.body.book.forEach((book) => {
    Book.findById({ _id: book })
      .exec()
      .then((doc) => {
        console.log(doc);

        doc.author = [...doc.author, _id];
        doc.save().catch((e) => {
          throw new Error(e);
        });
        //res.status(200).json(doc.book);
      })
      .catch((err) => {
        console.log(err);
        res.status(400).json('Book update error');
      });
  });

  // Create Author
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
