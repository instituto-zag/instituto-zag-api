const errorService = require('../services/error');
const sendgridResource = require('../resources/sendgrid');

const _public = {};

_public.send = (req, res) => {
  if(!isValidData(req.body)) res.status(400).send({ detail: buildInvalidDataError() });
  else sendMessage(req, res);
};

function isValidData(requestBody = {}){
  return requestBody.name && requestBody.email && requestBody.message;
}

function buildInvalidDataError(){
  return 'Data should be an object as follows: { name: String, email: String, message: String }.';
}

function sendMessage({ body }, res){
  sendgridResource.send(body).then(() => {
    res.status(204).send();
  }, err => {
    errorService.handle(res, {
      response: {
        data: {
          detail: err.message,
          status: 500
        }
      }
    });
  });
}

module.exports = _public;
