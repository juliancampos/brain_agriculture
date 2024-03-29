const { logger } = require('./lib/common/logger');
const pkg = require('./package.json');
const server = require('./lib/server');

process.title = pkg.name;

const shutdown = async () => {
  logger.info('Gracefully shutdown in progress');
  await server.stop();
  process.exit(0);
};

process.on('SIGTERM', shutdown)
  .on('SIGINT', shutdown)
  .on('SIGHUP', shutdown)
  .on('uncaughtException', (err) => {
    logger.error('uncaughtException caught the error: ', err);
    throw err;
  })
  .on('unhandledRejection', (err, promise) => {
    logger.error(`Unhandled Rejection at: Promise ${promise} reason: ${err}`);
    throw err;
  })
  .on('exit', (code) => {
    logger.info(`Node process exit with code: ${code}`);
  });

(async () => {
  try {
    await server.start();
  } catch (err) {
    logger.error('[APP] initialization failed', err);
    throw err;
  }
  logger.info('[APP] initialized SUCCESSFULLY');
})();
