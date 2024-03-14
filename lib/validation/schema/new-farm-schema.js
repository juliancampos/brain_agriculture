const joi = require('joi');

const newFarmSchema = joi.object().keys({
  name: joi.string().min(5).max(150).required(),
  city: joi.string().min(5).max(150).required(),
  state: joi.string().min(5).max(150).required(),
  totalArea: joi.number().required(),
  productiveArea: joi.number().required(),
  vegetationArea: joi.number().required(),
  cultivation: joi.array().optional(),
  createdAt: joi.date().required()
});

module.exports = newFarmSchema;
