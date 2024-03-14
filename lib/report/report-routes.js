const reportController = require('./controllers');

module.exports = (router) => {
  router
    .route('/report')
    .get(reportController.genereateReport)
};
