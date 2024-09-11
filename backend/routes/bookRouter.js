const express = require("express");
const router = express.Router();
const {
  addBook,
  getBooks,
  singleBook,
  updateBook,
  deletBook,
  searchBook,
} = require("../controller/bookController");

router.post("/books", addBook);
router.get("/books", getBooks);
router.get("/books/:id", singleBook);
router.put("/books/:id", updateBook);
router.delete("/books/:id", deletBook);
router.get("/books/search/:key", searchBook)
module.exports = router;
