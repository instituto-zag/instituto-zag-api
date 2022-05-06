const ResponseMock = require('../mocks/response');
const errorService = require('./error');

describe('Error Service', () => {
  it('should handle error', () => {
    const title = 'Some title';
    const detail = 'Some detail';
    const errorMock = {
      response: {
        data: {
          status: 400, title, detail
        }
      }
    };
    const response = new ResponseMock();
    errorService.handle(response, errorMock);
    expect(response.status).toHaveBeenCalledWith(400);
    expect(response.send).toHaveBeenCalledWith({ title, detail });
  });
});
