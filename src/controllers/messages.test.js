const PromiseMock = require('../mocks/promise');
const ResponseMock = require('../mocks/response');
const errorService = require('../services/error');
const sendgridResource = require('../resources/sendgrid');
const messagesController = require('./messages');

describe('Messages Controller', () => {
  function buildValidMessage(){
    return { name: 'Fernando', email: 'fernando@email.com', message: 'Olá!' };
  }

  function stubMessagesPost(resultType, { err, response } = {}){
    sendgridResource.send = jest.fn(() => new PromiseMock(resultType, { err, response }));
  }

  beforeEach(() => {
    errorService.handle = jest.fn();
  });

  it('should send a message', () => {
    const message = buildValidMessage();
    const response = new ResponseMock();
    stubMessagesPost('success');
    messagesController.send({ body: message }, response);
    expect(sendgridResource.send).toHaveBeenCalledWith(message);
    expect(response.status).toHaveBeenCalledWith(204);
    expect(response.send).toHaveBeenCalled();
  });

  it('should respond with error in case of invalid data sent', () => {
    const response = new ResponseMock();
    stubMessagesPost('success');
    messagesController.send({}, response);
    expect(response.status).toHaveBeenCalledWith(400);
    expect(response.send).toHaveBeenCalledWith({
      detail: 'Data should be an object as follows: { name: String, email: String, message: String }.'
    });
  });

  it('should handle error on send fail', () => {
    const message = buildValidMessage();
    const err = { message: 'error' };
    const response = new ResponseMock();
    stubMessagesPost('error', { err });
    messagesController.send({ body: message }, response);
    expect(errorService.handle).toHaveBeenCalledWith(response, {
      response: {
        data: {
          detail: err.message,
          status: 500
        }
      }
    });
  });
});
