const _public = {};

_public.refuse = (req, res) => {
  res.status(403).send({ message: 'This is not a public endpoint.' });
};

module.exports = _public;
