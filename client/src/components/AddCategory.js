import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Base URL for API
const API_URL = 'http://localhost:5000/api';

function App() {
  const [books, setBooks] = useState([]);
  const [authors, setAuthors] = useState([]);
  const [categories, setCategories] = useState([]);
  const [newBook, setNewBook] = useState({ title: '', author: '', category: '', publishedDate: '' });

  useEffect(() => {
    fetchBooks();
    fetchAuthors();
    fetchCategories();
  }, []);

  const fetchBooks = async () => {
    try {
      const response = await axios.get(${API_URL}/books);
      setBooks(response.data);
    } catch (error) {
      console.error('Error fetching books:', error);
    }
  };

  const fetchAuthors = async () => {
    try {
      const response = await axios.get(${API_URL}/authors);
      setAuthors(response.data);
    } catch (error) {
      console.error('Error fetching authors:', error);
    }
  };

  const fetchCategories = async () => {
    try {
      const response = await axios.get(${API_URL}/categories);
      setCategories(response.data);
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  const handleAddBook = async () => {
    try {
      const response = await axios.post(${API_URL}/books, newBook);
      setBooks([...books, response.data]);
      setNewBook({ title: '', author: '', category: '', publishedDate: '' });
    } catch (error) {
      console.error('Error adding book:', error);
    }
  };

  return (
    <div className="App">
      <h1>Book Management</h1>

      <h2>Add a new book</h2>
      <div>
        <input
          type="text"
          placeholder="Title"
          value={newBook.title}
          onChange={(e) => setNewBook({ ...newBook, title: e.target.value })}
        />
        <select
          value={newBook.author}
          onChange={(e) => setNewBook({ ...newBook, author: e.target.value })}
        >
          <option value="">Select Author</option>
          {authors.map((author) => (
            <option key={author._id} value={author._id}>{author.name}</option>
          ))}
        </select>
        <select
          value={newBook.category}
          onChange={(e) => setNewBook({ ...newBook, category: e.target.value })}
        >
          <option value="">Select Category</option>
          {categories.map((category) => (
            <option key={category._id} value={category._id}>{category.name}</option>
          ))}
        </select>
        <input
          type="date"
          value={newBook.publishedDate}
          onChange={(e) => setNewBook({ ...newBook, publishedDate: e.target.value })}
        />
        <button onClick={handleAddBook}>Add Book</button>
      </div>

      <h2>Books List</h2>
      <ul>
        {books.map((book) => (
          <li key={book._id}>
            {book.title} - {book.author.name} - {book.category.name} - {new Date(book.publishedDate).toLocaleDateString()}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;


import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [books, setBooks] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [newBook, setNewBook] = useState({ title: '', author: '', category: '' });
  const [newCategory, setNewCategory] = useState('');

  useEffect(() => {
    fetchBooks();
    fetchCategories();
  }, []);

  const fetchBooks = async () => {
    const result = await axios.get('http://localhost:5000/books');
    setBooks(result.data);
  };

  const fetchCategories = async () => {
    const result = await axios.get('http://localhost:5000/categories');
    setCategories(result.data);
  };

  const fetchBooksByCategory = async (categoryId) => {
    const result = await axios.get(`http://localhost:5000/books/category/${categoryId}`);
    setBooks(result.data);
  };

//   const handleCategoryChange = (e) => {
//     setSelectedCategory(e.target.value);
//     if (e.target.value) {
//       fetchBooksByCategory(e.target.value);
//     } else {
//       fetchBooks();
//     }
//   };

  const handleInputChange = (e) => {
    setNewBook({ ...newBook, [e.target.name]: e.target.value });
  };

//   const handleCategoryInputChange = (e) => {
//     setNewCategory(e.target.value);
//   };

  const handleBookSubmit = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:5000/books', newBook);
    fetchBooks();
    setNewBook({ title: '', author: '', category: '' });
  };

//   const handleCategorySubmit = async (e) => {
//     e.preventDefault();
//     await axios.post('http://localhost:5000/categories', { name: newCategory });
//     fetchCategories();
//     setNewCategory('');
//   };

  return (
    <div>
      <h1>Books and Categories</h1>
{/* 
      <h2>Categories</h2>
      <form onSubmit={handleCategorySubmit}>
        <input
          type="text"
          placeholder="New Category"
          value={newCategory}
          onChange={handleCategoryInputChange}
          required
        />
        <button type="submit">Add Category</button>
      </form> */}

      <h2>Books</h2>
      {/* <select onChange={handleCategoryChange} value={selectedCategory}>
        <option value="">All Categories</option>
        {categories.map((category) => (
          <option key={category._id} value={category._id}>
            {category.name}
          </option>
        ))}
      </select> */}

      <ul>
        {books.map((book) => (
          <li key={book._id}>
            <h2>{book.title}</h2>
            <p>Author: {book.author}</p>
            <p>Category: {book.category.name}</p>
          </li>
        ))}
      </ul>

      <h2>Add New Book</h2>
      <form onSubmit={handleBookSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={newBook.title}
          onChange={handleInputChange}
          required
        />
        <input
          type="text"
          name="author"
          placeholder="Author"
          value={newBook.author}
          onChange={handleInputChange}
          required
        />
        <select
          name="category"
          value={newBook.category}
          onChange={handleInputChange}
          required
        >
          <option value="">Select Category</option>
          {categories.map((category) => (
            <option key={category._id} value={category._id}>
              {category.name}
            </option>
          ))}
        </select>
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
