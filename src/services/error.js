const _public = {};

_public.handle = (res, err) => {
  const { title, detail, status } = err.response.data;
  res.status(status).send({ title, detail });
};

module.exports = _public;
