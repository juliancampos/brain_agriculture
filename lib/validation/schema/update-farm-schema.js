const joi = require('joi');

const newFarmSchema = joi.object().keys({
  name: joi.string().min(5).max(150).optional(),
  city: joi.string().min(5).max(150).optional(),
  state: joi.string().min(5).max(150).optional(),
  totalArea: joi.number().optional(),
  productiveArea: joi.number().optional(),
  vegetationArea: joi.number().optional(),
  cultivation: joi.array().optional(),
  updatedAt: joi.date().required()
});

module.exports = newFarmSchema;
