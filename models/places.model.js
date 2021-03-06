const mongoose = require('mongoose');

const placeSchema = new mongoose.Schema({
  name: {
    type:String
   },
  type: {
    type: String,
    enum: ["coffee shop", "bookstore"]
  },
  // location: {
  //   type: { type: String },
  //   coordinates: [Number]
  // }
});

placeSchema.index({ location: '2dsphere' });

const Place = mongoose.model('Place', placeSchema);

module.exports = Place;
