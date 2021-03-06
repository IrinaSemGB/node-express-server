import Author from './Model';

export default function updateById(req, res) {
  const authorId = req.params.authors;

  Author.findByIdAndUpdate(authorId, req.body)
    .populate('book.list')
    .exec()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json('Author update error');
    });
}
