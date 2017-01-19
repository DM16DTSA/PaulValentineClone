var watches = require('../models/watchProfile.js');

module.exports = {
  addWatch: function(req, res) {
    watches.collection.insert(req.body, function(err, watches) {
      if(err) {
        res.status(400).send(err);
      }
      else {
        res.status(200).send(watches);
      }
    })
  },
  getWatches: function(req, res) {
    watches.find({}, function(err, watches) {
    if(!err){
      res.send(watches);
    }
    else {
      console.log(err)
    }
  });
  }
};
