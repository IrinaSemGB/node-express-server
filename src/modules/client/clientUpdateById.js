import Client from './Model';

export default function clientUpdateById(req, res) {
  const clientId = req.params.clientId;

  Client.findByIdAndUpdate(clientId, req.body)
    .exec()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json('Client update error');
    });
}
