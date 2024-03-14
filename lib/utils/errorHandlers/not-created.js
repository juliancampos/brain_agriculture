const HTTP_STATUS = require('../http-status');

class NotCreatedError extends Error {
  constructor(message) {
    super(`Not Created: ${message}`);
    this.name = 'NotCreatedError';
    this.status = HTTP_STATUS.badRequest;
  }
}

module.exports = NotCreatedError;
