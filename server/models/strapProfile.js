var mongoose = require('mongoose');


var strapProfile = new mongoose.Schema({
  name: String,
  price: Number,
  image: String,
  background: String,
  inStock: Boolean,
  description: String,
  gallery: Array,
  reviews: Array,
  similar: Array,
});


module.exports = mongoose.model('straps', strapProfile);
