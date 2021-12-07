const mongoose = require('mongoose');
const { Schema } = mongoose;

const categorySchema = new Schema({
  name: String,
  slug: String
},
  {
    timestamps: true,
    versionKey: false,
  });

module.exports = mongoose.model('Category', categorySchema);
