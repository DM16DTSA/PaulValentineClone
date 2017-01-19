var mongoose = require('mongoose');


var watchProfile = new mongoose.Schema({
  name: String,
  price: Number,
  image: String,
  background: String,
  inStock: Boolean,
  description: String,
  coll: String,
  popularity: Number,
  gallery: Array,
  reviews: Array,
  similar: Array,
  straps: Array,
  specs: {
    case: String,
    material: String,
    caseColor: String,
    caseThickness: String,
    waterResistant: String,
    movement: String,
    dialColor: String,
    strap: String,
    strapWidth: String,
    interchangeableStraps: String
  }
});


module.exports = mongoose.model('watches', watchProfile);
