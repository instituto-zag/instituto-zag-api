const ENV = require('./environment')();
const routes = require('./routes');

const _public = {};

_public.init = ({ router, plugins = [], port = ENV.APP.PORT }) => {
  plugins.forEach(plugin => {
    router.use(plugin);
  });
  routes.init(router);
  router.listen(port, () => console.log(ENV.APP.SERVER_START_LOG_MESSAGE.trim()));
};

module.exports = _public;
