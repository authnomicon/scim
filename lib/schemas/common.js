exports.parse = function(rsrc) {
  var o = {};
  o.id = rsrc.id;
  
  // unique between the consumer and service provider.  will have 1 pair of this
  // for each client of the system.
  o.externalId = rsrc.externalId;
  
  // createdAt
  // updatedAt
  // version?
}

exports.format = function(obj) {
  
}

