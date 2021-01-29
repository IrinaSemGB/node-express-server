import Author from './Model';

export default function deleteById(req, res) {
  const authorId = req.params.authorId;

  Author.deleteOne({ _id: authorId })
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json('Author delete error');
    });
}
