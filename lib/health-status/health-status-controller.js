const pkg = require('../../package.json');
const httpStatus = require('../utils/http-status');

const healthStatusController = (() => {
  const get = (req, res) => {
    const health = {
      datetime: new Date(),
      service: pkg.name,
      version: pkg.version
    };

    return res.status(httpStatus.ok).send(health);
  };

  return {
    get
  };
})();

module.exports = healthStatusController;
