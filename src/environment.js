const PROD = require('../environments/production');
const DEV = require('../environments/development');

module.exports = function(){
  return process.env.NODE_ENV == 'production' ? PROD : DEV;
};
