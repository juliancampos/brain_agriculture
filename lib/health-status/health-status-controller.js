const pkg = require('../../package.json');
const httpStatus = require('../utils/http-status');

const get = (req, res) => {
  const health = {
    datetime: new Date(),
    service: pkg.name,
    version: pkg.version
  };

  return res.status(httpStatus.ok).send(health);
};


module.exports = {
  get
};
