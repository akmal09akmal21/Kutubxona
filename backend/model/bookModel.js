const mongoose = require("mongoose");
const bookSchema = mongoose.Schema({
  bookName: { type: String, required: true },
  author: {},
  category: { required: true },
  publishedYear: { type: Number },
  summary: { type: String },
});

module.exports = mongoose.model("bookModel", bookSchema);
