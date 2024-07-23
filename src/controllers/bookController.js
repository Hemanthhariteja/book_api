const Book = require('../models/book');

// Create a new book
const createBook = async (req, res) => {
  const { name, author, publishedDate } = req.body;

  try {
    const newBook = new Book({ name, author, publishedDate });
    const savedBook = await newBook.save();
    res.status(201).json(savedBook);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update a book
const updateBook = async (req, res) => {
  const { id } = req.params;
  const { name, author, publishedDate } = req.body;

  try {
    const updatedBook = await Book.findByIdAndUpdate(id, { name, author, publishedDate }, { new: true });
    if (!updatedBook) {
      return res.status(404).json({ message: 'Book not found' });
    }
    res.json(updatedBook);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a book
const deleteBook = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedBook = await Book.findByIdAndDelete(id);
    if (!deletedBook) {
      return res.status(404).json({ message: 'Book not found' });
    }
    res.json({ message: 'Book deleted' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = { createBook, updateBook, deleteBook };
