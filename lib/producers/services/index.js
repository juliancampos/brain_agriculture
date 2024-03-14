const { buildNewFarm } = require('../../farms/builder');
const ServiceBase = require('../../utils/service-base');
const validateDocument = require('../../utils/validate-document');
const validation = require('../../validation');
const { buildNewProducer, buildUpdateProducer } = require('../builder');
const errorHandler = require('../../utils/errorHandlers');
const ProducerRepository = require('../repository');
const { logger } = require('../../common/logger');
const documentType = require('../../utils/document-type');

const producerRepository = new ProducerRepository();

class ProducerService extends ServiceBase {
  constructor() {
    super();
    this._repository = producerRepository;
    this._includeQuery = { include: { farms: true } };
  }

  _buildNewData(body) {
    if (![documentType.CNPJ, documentType.CPF].includes(body.documentType)) {
      throw new errorHandler.InvalidData('Invalid document type');
    }
    
    if (!validateDocument[body.documentType](body.documentNumber)) {
      throw new errorHandler.InvalidData('Invalid document');
    };

    const newProducer = buildNewProducer(body);
    const { errorMessageValidation } = validation.validateNewProducer(newProducer);
    if (errorMessageValidation) {
      logger.error('Farm not valid to register on database. Error: %s', errorMessageValidation);
      throw new errorHandler.InvalidData(errorMessageValidation);
    }

    if (body.farm) {
      const newFarm = buildNewFarm(body.farm);
      const { errorMessageValidation } = validation.validateNewFarm(newFarm);
      if (errorMessageValidation) {
        logger.error('Farm not valid to register on database. Error: %s', errorMessageValidation);
        throw new errorHandler.InvalidData(errorMessageValidation);
      }
      newProducer.farms = { create: newFarm }
    }

    return newProducer;
  }

  async _validateBeforeUpdate(data, id) {
    const { documentType, documentNumber } = data;
    if ((documentType && !documentNumber) || (!documentType && documentNumber)) {
      throw new errorHandler.InvalidData('To update document is necessary inform both documentType and documentNumber');
    }

    if (documentType && !validateDocument[documentType](documentNumber)) {
      throw new errorHandler.InvalidData('Invalid document');
    }

    const alreadyExist = await this._repository.findOne({ documentNumber });
    if (alreadyExist && alreadyExist.id !== Number(id)) {
      throw new errorHandler.InvalidData('Producer with this document already exists');
    }

    return buildUpdateProducer(data);
  }
}

module.exports = ProducerService;
