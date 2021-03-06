import Client from './Model';

export default function clientGetById(req, res) {

  const clientId = req.params.clientId;

  Client.findById(clientId)
    .exec()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json('Client get by id error');
    });
}
