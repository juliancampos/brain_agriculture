const { logger } = require('../../common/logger');
const httpStatus = require('../../utils/http-status');
const ProducerService = require('../services');

const producerService = new ProducerService();

const get = async (req, res) => {
  try {
    const producer = await producerService.getOne();
    return res.status(httpStatus.ok).send(producer);
  } catch (error) {
    res.status(httpStatus.internalServerError).send(error);
  }
};

const getAll = async (req, res) => {
  try {
    const producers = await producerService.getAll();
    return res.status(httpStatus.ok).json(producers);
  } catch (error) {
    res.status(httpStatus.internalServerError).send(error);
  }
};

const create = async (req, res) => {
  try {
    const { body } = req;
    const producer = await producerService.create(body);
    return res.status(httpStatus.created).send(producer);
  } catch (error) {
    logger.error(error.message)
    res.status(httpStatus.internalServerError).send({ message: error.message });
  }
};

const updateOne = async (req, res) => {
  try {
    const { producerId } = req.params;
    const { body } = req;
    const producer = await producerService.updateOne(producerId, body);
    return res.status(httpStatus.ok).send(producer);
  } catch (error) {
    res.status(httpStatus.internalServerError).send(error);
  }
};

const deleteOne = async (req, res) => {
  try {
    const { producerId } = req.params;
    const result = await producerService.deleteOne(producerId);
    if (!result) {
      return res.status(httpStatus.notFound).send("Producer not found!");
    }
    return res.status(httpStatus.ok).send("Producer deleted successfully!");
  } catch (error) {
    res.status(httpStatus.internalServerError).send({error: error.message});
  }
}

module.exports = {
  get,
  getAll,
  create,
  updateOne,
  deleteOne
}
