const FarmService = require('../../farms/services');

const farmService = new FarmService();

const genereateReport = async () => {
  const totals = await farmService.getTotals();
  return totals;
};

module.exports = {
  genereateReport
};
