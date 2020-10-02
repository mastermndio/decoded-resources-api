'use strict';


var mongoose = require('mongoose'),
  Resource = mongoose.model('Resources');

exports.list_all_resources = function(req, res) {
  Resource.find({}, function(err, resource) {
    if (err)
      res.send(err);
    res.json(resource);
  });
};




exports.create_a_resource = function(req, res) {
  var new_resource = new Resource(req.body);
  new_resource.save(function(err, resource) {
    if (err)
      res.send(err);
    res.json(resource);
  });
};


exports.read_a_resource = function(req, res) {
  Resource.findById(req.params.resourceId, function(err, resource) {
    if (err)
      res.send(err);
    res.json(resource);
  });
};


exports.update_a_resource = function(req, res) {
  Resource.findOneAndUpdate({_id: req.params.resourceId}, req.body, {new: true}, function(err, resource) {
    if (err)
      res.send(err);
    res.json(resource);
  });
};


exports.delete_a_resource = function(req, res) {


  Resource.remove({
    _id: req.params.resourceId
  }, function(err, resource) {
    if (err)
      res.send(err);
    res.json({ message: 'Resource successfully deleted' });
  });
};
