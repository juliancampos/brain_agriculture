const newProducerSchema = require('./schema/producer-schema');
const newFarmSchema = require('./schema/new-farm-schema');
const updateFarmSchema = require('./schema/update-farm-schema');

const handleMessageError = (error) => {
  if (!error) {
    return {};
  }

  let errorMessageValidation = '';
  error.details.forEach((detail) => {
    errorMessageValidation += `${detail.message}. `;
  });
  return { errorMessageValidation };
};

const validateSchema = (schema, data) => {
  const { error } = schema.validate(data);
  return handleMessageError(error);
};

const validateNewProducer = (data) => validateSchema(newProducerSchema, data);
const validateNewFarm = (data) => validateSchema(newFarmSchema, data);
const validateUpdateFarm = (data) => validateSchema(updateFarmSchema, data);

module.exports = {
  validateNewProducer,
  validateNewFarm,
  validateUpdateFarm
};
