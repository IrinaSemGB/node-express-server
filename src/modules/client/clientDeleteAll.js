import Client from './Model';

export default function clientDeleteAll(req, res) {
  Client.deleteMany()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json('Client delete all error');
    });
}
