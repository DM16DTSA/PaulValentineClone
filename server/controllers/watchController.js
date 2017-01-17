var watchProfile = require('../models/watchProfile.js');

module.exports = {
  addWatch: function(req, res) {
    watchProfile.collection.insert(req.body, function(err, watches) {
      if(err) {
        res.status(400).send(err);
      }
      else {
        res.status(200).send(watches);
      }
    })
    // watchProfile.create({
    // "name":"Feliz Mesh",
    //   "price": 149.00,
    //   "image": "url",
    //   "inStock": true,
    //   "description": "The Feliz Mesh is a timeless yet distinctive accessory, with an aesthetic quality that is equally elegant and sophisticated. Named for Los Feliz - perhaps Los Angeles' most unique neighborhood - the watch features matt black plated stainless steel, as well as an ultra-thin, lightweight stainless steel mesh strap. The minimalist ultra-thin watch case makes it comfortable to wear on the go and it's perfect for either a day at the park or a night at a party. Like Los Feliz, this watch has an independent vibe that is all its own.",
    //   "specs": {
    //     "case": "39 MM",
    //     "material":"STEEL",
    //     "caseColor":"MATT BLACK",
    //     "caseThickness":"7 MM",
    //     "waterResistant":"5 ATM",
    //     "movement":"QUARTZ",
    //     "dialColor":"MATT BLACK",
    //     "strap":"STAINLESS STEEL",
    //     "strapWidth":"20 MM",
    //     "interchangeableStraps":"YES"
    //   },
    //   "gallery":[],
    //   "reviews":[],
    //   "straps":[],
    //   "popularity":1
    // });
    // return res;
  },
  getWatches: function(req, res) {
    watchProfile.find({}, function(err, watches) {
    res.send(watches);
  });
  }
};
