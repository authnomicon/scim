// POST
exports = module.exports = function(imd, md, flow, initialize, authenticate, errorLogging) {
  
  function process(req, res, next) {
    var resource = req.params.resource;
    
    // TODO: take the `schemas` attribute of the representation, and append
    // the singular resource "type" to it, since everything is in the
    // same namespace.
    
    
    var r = scim.parse(req.body);
    
    ds.create(r, function(err) {
      
    });
    
  }
  
  
  return [
    initialize(),
  ];
};

exports['@require'] = [
  'http://i.bixbyjs.org/http/middleware/initialize',
  'http://i.bixbyjs.org/http/middleware/authenticate',
  'http://i.bixbyjs.org/http/middleware/errorLogging'
];
