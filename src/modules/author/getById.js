import Author from './Model';

export default function getById(req, res) {
  const authorId = req.params.authors;

  Author.findById(authorId)
    .exec()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json('Author get by id error');
    });
}
