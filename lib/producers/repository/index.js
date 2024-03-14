const { PrismaClient } = require('@prisma/client');
const RepositoryBase = require('../../utils/repository-base');
const prisma = new PrismaClient()

class ProducerRepository extends RepositoryBase {
  constructor() {
    super();
    this.model = prisma.producer;
  }
}

// const getProducers = async (query) => {
//   const producers = await prisma.producer.findMany(query);
//   return producers;
// };

// const getProducer = (query) => {
//   return prisma.producer.findFirst(query);
// };

// const createProducer = (producer) => {
//   return prisma.producer.create({
//     data: producer
//   });
// };

// const updateProducer = (producerId, dataProducer) => {
//   return prisma.producer.update({
//     where: {
//       id: producerId
//     },
//     data: dataProducer
//   });
// }

// const deleteProducer = (producerId) => {
//   return prisma.producer.delete({
//     where: {
//       id: producerId
//     }
//   })
// }

module.exports = ProducerRepository;
