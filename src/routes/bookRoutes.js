const express = require('express');
const { createBook, updateBook, deleteBook } = require('../controllers/bookController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

router.post('/books', authMiddleware, createBook);
router.put('/books/:id', authMiddleware, updateBook);
router.delete('/books/:id', authMiddleware, deleteBook);

module.exports = router;
