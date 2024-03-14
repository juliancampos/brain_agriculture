const HTTP_STATUS = require('../http-status');

class NoContentFoundError extends Error {
  constructor(message) {
    super(`No Content Found: ${message}`);
    this.name = 'NoContentFoundError';
    this.status = HTTP_STATUS.noContent;
  }
}

module.exports = NoContentFoundError;
