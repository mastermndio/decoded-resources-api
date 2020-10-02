'use strict'

module.exports = function(app) {
  let resources = require('../controllers/resourcesControllers');

  app.route('/resource')
    .get(resources.list_all_resources)
    .post(resources.create_a_resource);

  app.route('/resource/:resourceId')
    .get(resources.read_a_resource)
    .delete(resources.delete_a_resource);
};
