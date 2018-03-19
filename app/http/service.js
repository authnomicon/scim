exports = module.exports = function(listHandler, createHandler, readHandler, updateHandler, deleteHandler) {
  var express = require('express');
  var router = new express.Router();
  
  
  router.get('/:resource/', listHandler);
  router.post('/:resource/', createHandler);
  router.get('/:resource/:id', readHandler);
  router.put('/:resource/:id', updateHandler);
  router.delete('/:resource/:id', deleteHandler);
  
  return router;
};

exports['@implements'] = [ 'http://i.bixbyjs.org/http/Service' ];
exports['@path'] = '/scim/v1';
exports['@require'] = [
  './handlers/list',
  './handlers/create',
  './handlers/read',
  './handlers/update',
  './handlers/delete'
];
