const RouterMock = require('./mocks/router');
const routes = require('./routes');
const app = require('./app');

describe('App', () => {
  beforeEach(() => {
    routes.init = jest.fn();
    console.log = jest.fn();
  });

  it('should use plugins on initialize', () => {
    const router = new RouterMock();
    const plugins = [1, 2];
    app.init({ router, plugins });
    expect(router.use).toHaveBeenCalledWith(1);
    expect(router.use).toHaveBeenCalledWith(2);
  });

  it('should initialize routes on initialize', () => {
    const router = new RouterMock();
    app.init({ router });
    expect(routes.init).toHaveBeenCalledWith(router);
  });

  it('should listen routes using port 9001 by default on initialize', () => {
    const router = new RouterMock();
    app.init({ router });
    expect(router.listen.mock.calls[0][0]).toEqual(9001);
  });

  it('should listen routes using port 9001 by default on initialize', () => {
    const router = new RouterMock();
    const port = 80;
    app.init({ router, port });
    expect(router.listen.mock.calls[0][0]).toEqual(port);
  });

  it('should log port number on listen routes success', () => {
    const message = `
Running application on http://localhost:9001.
Access chrome://inspect to debug your code.
Press Cmd+C to stop.`;
    const router = new RouterMock();
    app.init({ router });
    expect(console.log).toHaveBeenCalledWith(message.trim());
  });
});
