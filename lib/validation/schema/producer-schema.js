const joi = require('joi');

const documentTypeEnum = {
  CPF: 'CPF',
  CNPJ: 'CNPJ'
};

const newProducerSchema = joi.object().keys({
  documentType: joi.string().valid(documentTypeEnum.CNPJ, documentTypeEnum.CPF),
  documentNumber: joi.string().required(),
  name: joi.string().required(),
  createdAt: joi.date().required()
});

module.exports = newProducerSchema;
