const httpStatus = require('../http-status');

class InvalidDataError extends Error {
  constructor(invalidDataMessage) {
    super(`Invalid Data: ${invalidDataMessage}`);
    this.name = 'InvalidDataError';
    this.status = httpStatus.badRequest;
  }
}

module.exports = InvalidDataError;
