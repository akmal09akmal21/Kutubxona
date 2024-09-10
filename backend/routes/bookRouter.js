const express = require("express");
const router = express.Router();
const {
  addBook,
  getBooks,
  singleBook,
  updateBook,
  deletBook,
} = require("../controller/bookController");

router.post("/books", addBook);
router.get("/books", getBooks);
router.get("/books/:id", singleBook);
router.put("/books/:id", updateBook);
router.delete("/books/:id", deletBook);

module.exports = router;
