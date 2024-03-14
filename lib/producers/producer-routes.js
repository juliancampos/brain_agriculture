const producerController = require('./controllers');

module.exports = (router) => {
  router.route('/producers')
    .get(producerController.getAll)
    .post(producerController.create);

  router.route('/producer/:producerId')
    .get(producerController.get)
    .put(producerController.updateOne)
    .delete(producerController.deleteOne)
}
