const mongoose = require("mongoose");

const authorSchema = mongoose.Schema({
  name: { type: String, required: true },
  biography: { type: String },
});

module.exports = mongoose.model("authorModel", authorSchema);
