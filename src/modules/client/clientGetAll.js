import Client from './Model';

export default function clientGetAll(req, res) {
  Client.find()
    .exec()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json('Client get all error');
    });
}
