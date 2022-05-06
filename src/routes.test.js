const RouterMock = require('./mocks/router');
const messagesRoutes = require('./routes/messages');
const routes = require('./routes');

describe('Routes', () => {
  beforeEach(() => {
    messagesRoutes.init = jest.fn();
  });

  it('should register messages routes', () => {
    const router = new RouterMock();
    routes.init(router);
    expect(messagesRoutes.init).toHaveBeenCalledWith(router);
  });
});
