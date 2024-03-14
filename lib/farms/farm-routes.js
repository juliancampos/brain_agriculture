const farmController = require('./controllers');

module.exports = (router) => {
  router.route('/farms')
    .get(farmController.getAll)
    .post(farmController.create);

  router.route('/farm/:farmId')
    .get(farmController.get)
    .put(farmController.updateOne)
    .delete(farmController.deleteOne);
  
  router.route('/farm/:farmId/producer')
    .put(farmController.updateOwner);
}
