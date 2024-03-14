class RepositoryBase {

  async findMany(query) {
    const data = await this.model.findMany(query);
    return data;
  };
  
  findOne(query) {
    return this.model.findFirst(query);
  };
  
  create(data) {
    return this.model.create({ data });
  };
  
  updateOne(id, data) {
    return this.model.update({
      where: {
        id
      },
      data
    });
  }
  
  deleteOne(id) {
    return this.model.delete({
      where: {
        id
      }
    })
  }
}

module.exports = RepositoryBase;
