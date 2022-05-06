const messagesRoutes = require('./routes/messages');

const _public = {};

_public.init = router => {
  messagesRoutes.init(router);
};

module.exports = _public;
