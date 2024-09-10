const mongoose = require("mongoose");
const categoryModel = require("./categoryModel");
const authorModel = require("./authorModel");
const { ObjectId } = mongoose.Schema;
const bookSchema = mongoose.Schema(
  {
    bookName: { type: String, required: true },
    author: { type: ObjectId, ref: authorModel },
    category: { type: ObjectId, ref: categoryModel, required: true },
    publishedYear: { type: Number },
    summary: { type: String },
  },
  { timesTamps: true }
);

module.exports = mongoose.model("bookModel", bookSchema);
