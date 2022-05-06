const RouterMock = require('../mocks/router');
const refusalService = require('../services/refusal');
const messagesController = require('../controllers/messages');
const messagesRoutes = require('./messages');

describe('Messages Routes', () => {
  it('should register routes', () => {
    const router = new RouterMock();
    messagesRoutes.init(router);
    expect(router.get).toHaveBeenCalledWith('/messages/:messageId', refusalService.refuse);
    expect(router.post).toHaveBeenCalledWith('/messages', messagesController.send);
    expect(router.put).toHaveBeenCalledWith('/messages/:messageId', refusalService.refuse);
    expect(router.delete).toHaveBeenCalledWith('/messages/:messageId', refusalService.refuse);
  });
});
