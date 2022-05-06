function ResponseMock(){
  this.send = jest.fn();
  this.status = jest.fn(() => this);
}

module.exports = ResponseMock;
