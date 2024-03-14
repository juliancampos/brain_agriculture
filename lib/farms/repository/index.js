const { PrismaClient } = require('@prisma/client');
const RepositoryBase = require('../../utils/repository-base');

const prisma = new PrismaClient();


class FarmRepository extends RepositoryBase {
  constructor() {
    super();
    this.model = prisma.farm;
  }

  async getTotals(query) {
    const totals = await this.model.aggregate(query);
    return totals;
  }
}

module.exports = FarmRepository;
