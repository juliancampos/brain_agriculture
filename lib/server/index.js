const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const { logger } = require('../common/logger');
const { healthStatusRoutes } = require('../health-status');
const conf = require('../conf');
const pkg = require('../../package.json');
const producerRoutes = require('../producers/producer-routes');
const reportRoutes = require('../report/report-routes');
const farmRoutes = require('../farms/farm-routes');

const server = (() => {
  const router = new express.Router();
  const app = express();
  const env = process.env.NODE_ENV;
  let serverProcess;

  const start = () => new Promise((resolve) => {
    healthStatusRoutes(router);
    producerRoutes(router);
    reportRoutes(router);
    farmRoutes(router);

    app.set('port', conf.port);
    app.use(cors());
    app.use(express.json());
    app.use(helmet());
    app.use('/', router);
    

    serverProcess = app.listen(app.get('port'), () => {
      logger.info('------------------------------------------------------------------');
      logger.info(`${pkg.name} - Version: ${pkg.version}`);
      logger.info('------------------------------------------------------------------');
      logger.info(`ATTENTION, ${env} ENVIRONMENT!`);
      logger.info('------------------------------------------------------------------');
      logger.info(`Express server listening on port: ${serverProcess.address().port}`);
      logger.info('------------------------------------------------------------------');

      return resolve(app);
    });
  });

  const stop = () => new Promise((resolve, reject) => {
    if (serverProcess) {
      serverProcess.close((err) => {
        if (err) {
          return reject(err);
        }
        return resolve();
      });
    }
  });

  return {
    start,
    stop
  };
})();

module.exports = server;
