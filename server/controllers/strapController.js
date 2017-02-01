var straps = require('../models/strapProfile.js');
var mongoose = require('mongoose');

module.exports = {
  // addStrap: function(req, res) {
  //   straps.collection.insert(req.body, function(err, straps) {
  //     if(err) {
  //       res.status(400).send(err);
  //     }
  //     else {
  //       res.status(200).send(straps);
  //     }
  //   })
    // straps.create({
    // "name":"Black Leather",
    //   "price": 29.00,
    //   "image": "url",
    //   "background": "url",
    //   "inStock": false,
    //   "description": "Our premium quality genuine leather straps are soft and supple, yet strong enough to withstand consistent wear. Their sleek and simple design are made to accessorize every wrist with style. Due to an quick release pin mechanism, all our straps are interchangeable within a few seconds. This gives you the possibility of wearing a different watch every single day. Time to personalize your look.",
    //   "gallery":[],
    //   "reviews":[],
    //   "similar":[]
    // });
  // },
  getStraps: function(req, res) {
    straps.find({}, function(err, straps) {
    res.send(straps);
  });
  },
  getStrapsbyId: function(req, res) {
    straps.find({_id :{
      $in: req.body.map(function(o) {
        return mongoose.Types.ObjectId(o)})
    }}, function(err, straps) {
      res.send(straps)
    });
  },
  similarStraps: function(req, res) {
   straps.find({name:{ $in: ["Black Leather", "Grey Leather"]}}, function(err, straps) {
     res.send(straps)
   })
  },
  addStrapReview: function(req, res) {
    var ff = req.body;
    straps.collection.findAndModify(
      {name: req.body.product},
      [],
      {$push: {"reviews":req.body}},
      {new: true },
      function(err, strap) {
      if(!err) {
        res.send(strap.reviews);
      } else {
        res.send(err)
        console.log(err);
      }
      }
    )
  }
};
