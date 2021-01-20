import Client from './Model';

export default function clientDeleteById(req, res) {
  const clientId = req.params.clientId;

  Client.deleteOne({ _id: clientId })
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json('Client delete error');
    });
}
