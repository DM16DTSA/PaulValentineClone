var mongoose = require('mongoose');



var watchProfile =  new mongoose.Schema({
  name: String,
  price: Number,
  image: String,
  inStock: Boolean,
  description: String,
  specs: {
    case: String,
    material: String,
    caseColor: String,
    caseThickness: String,
    movement: String,
    dialColor: String,
    strap: String,
    strapWidth: String
  },
  gallery: Array,
  reviews: Array,
  similar: Array,
  straps: Array
});





module.exports = mongoose.model('watchProfile', watchProfile);
