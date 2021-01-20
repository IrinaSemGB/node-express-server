const names = [];

export default function home(req, res) {
  names.push(req.body.name);
  res.status(200).json(names);
}
