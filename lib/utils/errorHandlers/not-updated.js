const HTTP_STATUS = require('../http-status');

class NotUpdatedError extends Error {
  constructor(message) {
    super(`Not Updated: ${message}`);
    this.name = 'NotUpdatedError';
    this.status = HTTP_STATUS.badRequest;
  }
}

module.exports = NotUpdatedError;
