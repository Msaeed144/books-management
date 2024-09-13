const express = require("express");
require('dotenv').config();
const app = express();

// اضافه کردن middleware برای پردازش داده‌های JSON
app.use(express.json());

let books = [
    {
        id: 1,
        title: "کتاب اول",
        author: "رضا",
        publisher: "انتشارات الف",
        pages: 150,
        read: 50 // تعداد صفحات خوانده شده
    },
    {
        id: 2,
        title: "کتاب دوم",
        author: "علی",
        publisher: "انتشارات ب",
        pages: 200,
        read: 100
    }
];

// دریافت تمام کتاب‌ها
app.get("/api/books", (req, res) => {
    res.json(books);
});

// دریافت کتاب بر اساس ID
app.get("/api/books/:id", (req, res) => {
    const book = books.find(b => b.id === parseInt(req.params.id));
    if (!book) return res.status(404).send("کتاب مورد نظر یافت نشد");
    res.json(book);
});

// افزودن کتاب جدید
app.post("/api/books", (req, res) => {
    const newBook = {
        id: books.length + 1,
        title: req.body.title,
        author: req.body.author,
        publisher: req.body.publisher,
        pages: req.body.pages,  // تعداد صفحات
        read: req.body.read || 0 // تعداد صفحات خوانده شده، به صورت پیش‌فرض 0
    };
    books.push(newBook);
    res.status(201).json(newBook);
});

// ویرایش کتاب (مثلاً تعداد صفحات خوانده شده یا سایر فیلدها)
app.put("/api/books/:id", (req, res) => {
    const book = books.find(b => b.id === parseInt(req.params.id));
    if (!book) return res.status(404).send("کتاب مورد نظر یافت نشد");

    // به‌روزرسانی اطلاعات کتاب
    book.title = req.body.title || book.title;
    book.author = req.body.author || book.author;
    book.publisher = req.body.publisher || book.publisher;
    book.pages = req.body.pages !== undefined ? req.body.pages : book.pages;
    book.read = req.body.read !== undefined ? req.body.read : book.read;

    res.json(book);
});

// حذف کتاب
app.delete("/api/books/:id", (req, res) => {
    const bookIndex = books.findIndex(b => b.id === parseInt(req.params.id));
    if (bookIndex === -1) return res.status(404).send("کتاب مورد نظر یافت نشد");

    const deletedBook = books.splice(bookIndex, 1);
    res.json(deletedBook);
});

// پورت سرور
const port = process.env.APP_PORT || 3001;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
