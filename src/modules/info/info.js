export default function info(req, res) {
  const a = req.body.a;
  const b = req.body.b;
  const operation = req.body.operation;

  let result = 0;

  if (operation === 'plus') {
    result = a + b;
  } else if (operation === 'minus') {
    result = a - b;
  } else if (operation === 'mult') {
    result = a * b;
  } else if (operation === 'division') {
    result = a / b;
  }
  res.send('Info here... ' + result);
}
