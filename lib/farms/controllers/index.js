const httpStatus = require('../../utils/http-status');
const FarmService = require('../services');

const farmService = new FarmService();

const get = async (req, res) => {
  try {
    const farm = await farmService.getOne();
    return res.status(httpStatus.ok).send(farm);
  } catch (error) {
    res.status(httpStatus.internalServerError).send(error);
  }
};

const getAll = async (req, res) => {
  try {
    const farms = await farmService.getAll();
    return res.status(httpStatus.ok).json(farms);
  } catch (error) {
    res.status(httpStatus.internalServerError).send(error);
  }
};

const create = async (req, res) => {
  try {
    const { body } = req;
    const farm = await farmService.create(body);
    return res.status(httpStatus.created).send(farm);
  } catch (error) {
    res.status(error.status || httpStatus.internalServerError).send({ message: error.message });
  }
};

const updateOne = async (req, res) => {
  try {
    const { farmId } = req.params;
    const { body } = req;
    const farm = await farmService.updateOne(farmId, body);
    return res.status(httpStatus.ok).send(farm);
  } catch (error) {
    res.status(httpStatus.internalServerError).send(error);
  }
};

const updateOwner = async (req, res) => {
  try {
    const { farmId } = req.params;
    const { producerId } = req.body;
    const result = await farmService.updateOwner(farmId, producerId);
    return res.status(httpStatus.ok).send('Farm updated successfully!');
  } catch (error) {
    res.status(error.status || httpStatus.internalServerError).send({ message: error.message });
  }
}

const deleteOne = async (req, res) => {
  try {
    const { farmId } = req.params;
    const result = await farmService.deleteOne(farmId);
    if (!result) {
      return res.status(httpStatus.notFound).send("Farm not found!");
    }
    return res.status(httpStatus.ok).send("Farm deleted successfully!");
  } catch (error) {
    res.status(httpStatus.internalServerError).send(error);
  }
}

module.exports = {
  get,
  getAll,
  create,
  updateOne,
  deleteOne,
  updateOwner
}
