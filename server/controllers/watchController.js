var watches = require('../models/watchProfile.js');

module.exports = {
  // addWatch: function(req, res) {
  //   watches.collection.insert(req.body, function(err, watches) {
  //     if(err) {
  //       res.status(400).send(err);
  //     }
  //     else {
  //       res.status(200).send(watches);
  //     }
  //   })
  // },
  getWatches: function(req, res) {
    watches.find({}, function(err, watches) {
      if(!err){
        res.send(watches);
      }
      else {
        console.log(err)
      }
    });
  },
  addWatchReview: function(req, res) {
    var ff = req.body;
    watches.collection.findAndModify(
      {name: req.body.product},
      [],
      {$push: {"reviews":req.body}},
      {new: true },
      function(err, watch) {
      if(!err) {
        res.send(watch.reviews);
      } else {
        res.send(err)
        console.log(err);
      }
      }
    )
  },
  getCollWatches: function(req, res) {
    console.log(req.params.coll)
      watches.find({coll:req.params.coll
      }, function(err, watches) {
        res.send(watches)
    }).limit(4);
  }



};
