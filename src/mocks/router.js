function RouterMock(){
  this.use = jest.fn();
  this.listen = jest.fn((port, successCallback) => successCallback());
  this.get = jest.fn();
  this.post = jest.fn();
  this.put = jest.fn();
  this.delete = jest.fn();
}

module.exports = RouterMock;
