const ServiceBase = require('../../utils/service-base');
const validateTotalAreaFarm = require('../../utils/validate-total-area-farm');
const builder = require('../builder');
const validation = require('../../validation');
const errorHandler = require('../../utils/errorHandlers');
const { logger } = require('../../common/logger');
const FarmRepository = require('../repository');

const farmRepository = new FarmRepository();

class FarmService extends ServiceBase {
  constructor() {
    super();
    this._repository = farmRepository;
  }

  async getTotals() {
    const query = {
      _count: { id: true },
      _sum: { totalArea: true }
    };
    const totals = await this._repository.getTotals(query);
    return totals;
  }

  async updateOwner(farmId, producerId) {
    try {
      if (!farmId || !producerId) {
        errorHandler.InvalidData('Farm id and producer id must be informed');
      }
      
      const updateData = builder.buildUpdateFarm({ producerId });
      const result = await this._repository.updateOne(Number(farmId), updateData);
      return result;
    } catch (error) {
      if (error.code === 'P2003') {
        throw new errorHandler.InvalidData('Invalid producer id informed');
      }
      throw new errorHandler.InvalidData(error.meta.cause);
    }
  }

  _buildNewData(data) {
    if (!validateTotalAreaFarm(data)) {
      throw new errorHandler.InvalidData('Total area must be equal to productive area + vegetation area');
    }

    const newFarm = builder.buildNewFarm(data);
    const { errorMessageValidation } = validation.validateNewFarm(newFarm);
    if (errorMessageValidation) {
      logger.error('Farm not valid to register on database. Error: %s', errorMessageValidation);
      throw new errorHandler.InvalidData(errorMessageValidation);
    }
    return newFarm;
  }

  async _validateBeforeUpdate(data) {
    const { productiveArea, vegetationArea, totalArea } = data;
    const fields = [
      productiveArea,
      vegetationArea,
      totalArea
    ].map((item) => item !== null && !Number.isNaN(Number(item)));

    if (fields.includes(true) && fields.includes(false)) {
      throw new errorHandler.InvalidData('Fields productiveArea, vegetationArea and totalArea must be all informeda');
    }

    if (fields.includes(true) && !validateTotalAreaFarm(data)) {
      throw new errorHandler.InvalidData('Total area must be equal to productive area + vegetation area');
    }

    const newFarm = builder.buildUpdateFarm(data);
    const { errorMessageValidation } = validation.validateUpdateFarm(newFarm);
    if (errorMessageValidation) {
      logger.error('Farm not valid to register on database. Error: %s', errorMessageValidation);
      throw new errorHandler.InvalidData(errorMessageValidation);
    }

    return newFarm;
  }
}

module.exports = FarmService;
