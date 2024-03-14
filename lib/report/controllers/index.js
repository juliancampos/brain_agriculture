const httpStatus = require('../../utils/http-status');
const reportService = require('../services');

const genereateReport = async (req, res) => {
  try {
    const report = await reportService.genereateReport();
    return res.status(httpStatus.ok).send(report);
  } catch (error) {
    return res.status(httpStatus.internalServerError).send(error);
  }
};

module.exports = {
  genereateReport
}