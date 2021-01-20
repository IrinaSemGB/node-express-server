import Client from './Model';

export default function clientCreate(req, res) {
  const newClient = new Client({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  });

  newClient
    .save()
    .then(() => {
      res.status(200).json('Client created');
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json('Client not created');
    });
}
