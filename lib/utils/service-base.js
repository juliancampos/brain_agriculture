const { logger } = require('../common/logger');
const errorHandler = require('./errorHandlers');

class ServiceBase {
  async getOne(query = {}) {
    if (this._includeQuery) {
      query.include = this._includeQuery.include;
    }
    return this._repository.findOne(query);
  }
  
  async getAll(query = {}) {
    if (this._includeQuery) {
      query.include = this._includeQuery.include;
    }
    return this._repository.findMany(query);
  }
  
  async create(body) {
    const newData = this._buildNewData(body);
    const data = await this._repository.create(newData);
    return data;
  }
  
  async updateOne(id, body) {
    const data = await this._validateBeforeUpdate(body, id);
    return this._repository.updateOne(Number(id), data);
  }
  
  async deleteOne(id) {
    try {
      await this._repository.deleteOne(Number(id));
      return true;
    } catch (error) {
      logger.error(`${error.meta.cause}. id: ${id}`);
      return false;
    }
  }
}

module.exports = ServiceBase;
