/* eslint-disable @typescript-eslint/no-var-requires */
const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const booksFilePath = path.join(__dirname, 'books.json');

const readBooksFromFile = () => {
    if (fs.existsSync(booksFilePath)) {
        const data = fs.readFileSync(booksFilePath);
        return JSON.parse(data);
    }
    return [];
};
const writeBooksToFile = (books) => {
    fs.writeFileSync(booksFilePath, JSON.stringify(books, null, 2));
};
app.get("/api/books", (req, res) => {
    const books = readBooksFromFile();
    res.json(books);
});
app.get("/api/books/:id", (req, res) => {
    const books = readBooksFromFile();
    const book = books.find(b => b.id === parseInt(req.params.id));
    if (!book) return res.status(404).send("کتاب مورد نظر یافت نشد");
    res.json(book);
});
app.post("/api/books", (req, res) => {
    const books = readBooksFromFile();
    const newBook = {
        id: books.length + 1,
        title: req.body.title,
        author: req.body.author,
        publisher: req.body.publisher,
        pages: req.body.pages,  
        read: req.body.read || 0,
        isReading: req.body.isReading || false
    };
    books.push(newBook);
    writeBooksToFile(books);
    res.status(201).json(newBook);
});
app.put("/api/books/:id", (req, res) => {
    const books = readBooksFromFile();
    const book = books.find(b => b.id === parseInt(req.params.id));
    if (!book) return res.status(404).send("کتاب مورد نظر یافت نشد");

    // بروزرسانی مقادیر کتاب
    book.title = req.body.title || book.title;
    book.author = req.body.author || book.author;
    book.publisher = req.body.publisher || book.publisher;
    book.pages = req.body.pages !== undefined ? req.body.pages : book.pages;
    book.read = req.body.read !== undefined ? req.body.read : book.read;
    book.isReading = req.body.isReading !== undefined ? req.body.isReading : book.isReading; // اضافه شده
    
    writeBooksToFile(books);
    res.json(book);
});

app.delete("/api/books/:id", (req, res) => {
    const books = readBooksFromFile();
    const bookIndex = books.findIndex(b => b.id === parseInt(req.params.id));
    if (bookIndex === -1) return res.status(404).send("کتاب مورد نظر یافت نشد");
    const deletedBook = books.splice(bookIndex, 1);
    writeBooksToFile(books);
    res.json(deletedBook);
});
const port = process.env.APP_PORT || 3001;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
