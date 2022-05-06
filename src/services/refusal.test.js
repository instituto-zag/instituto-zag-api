const ResponseMock = require('../mocks/response');
const refusalService = require('./refusal');

describe('Refusal Service', () => {
  it('should refuse a request', () => {
    const response = new ResponseMock();
    refusalService.refuse({}, response);
    expect(response.status).toHaveBeenCalledWith(403);
    expect(response.send).toHaveBeenCalledWith({
      message: 'This is not a public endpoint.'
    });
  });
});
