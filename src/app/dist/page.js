/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var react_1 = require("react");
var Books_1 = require("@/components/Books");
var link_1 = require("next/link");
function Home() {
    var _this = this;
    var _a = react_1.useState(), books = _a[0], setBooks = _a[1];
    var _b = react_1.useState(true), loading = _b[0], setLoading = _b[1];
    var _c = react_1.useState(null), error = _c[0], setError = _c[1];
    react_1.useEffect(function () {
        var fetchBooks = function () { return __awaiter(_this, void 0, void 0, function () {
            var response, data, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, fetch('http://localhost:5500/api/books')];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.json()];
                    case 2:
                        data = _a.sent();
                        setBooks(data);
                        setLoading(false);
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _a.sent();
                        setError(error_1.message);
                        setLoading(false);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        }); };
        fetchBooks();
    }, []);
    var updateBookStatus = function (bookId, currentStatus) { return __awaiter(_this, void 0, void 0, function () {
        var response, updatedBook_1, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 5, , 6]);
                    return [4 /*yield*/, fetch("http://localhost:5500/api/books/" + bookId, {
                            method: 'PUT',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify({ isReading: !currentStatus })
                        })];
                case 1:
                    response = _a.sent();
                    if (!response.ok) return [3 /*break*/, 3];
                    return [4 /*yield*/, response.json()];
                case 2:
                    updatedBook_1 = _a.sent();
                    setBooks(function (prevBooks) { return prevBooks === null || prevBooks === void 0 ? void 0 : prevBooks.map(function (book) {
                        return book.id === updatedBook_1.id ? updatedBook_1 : book;
                    }); });
                    return [3 /*break*/, 4];
                case 3:
                    console.error('Failed to update book status', response.status);
                    _a.label = 4;
                case 4: return [3 /*break*/, 6];
                case 5:
                    error_2 = _a.sent();
                    console.error('Error updating book status', error_2);
                    return [3 /*break*/, 6];
                case 6: return [2 /*return*/];
            }
        });
    }); };
    var deleteBook = function (bookId) { return __awaiter(_this, void 0, void 0, function () {
        var response, error_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, fetch("http://localhost:5500/api/books/" + bookId, {
                            method: 'DELETE'
                        })];
                case 1:
                    response = _a.sent();
                    if (response.ok) {
                        setBooks(function (prevBooks) { return prevBooks === null || prevBooks === void 0 ? void 0 : prevBooks.filter(function (book) { return book.id !== bookId; }); });
                    }
                    else {
                        console.error('Failed to delete book', response.status);
                    }
                    return [3 /*break*/, 3];
                case 2:
                    error_3 = _a.sent();
                    console.error('Error deleting book', error_3);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); };
    if (loading) {
        return React.createElement("p", null, "\u062F\u0631\u062D\u0627\u0644 \u062F\u0631\u06CC\u0627\u0641\u062A...");
    }
    if (error) {
        return React.createElement("p", null,
            "\u062E\u0637\u0627 ",
            error);
    }
    return (React.createElement("div", { className: "flex justify-center mt-4 w-full" },
        React.createElement("div", { className: "w-full" },
            React.createElement("div", { className: "w-[85%] mx-auto" },
                React.createElement("h3", { className: "text-lg mb-2" }, "\u0644\u06CC\u0633\u062A \u06A9\u062A\u0627\u0628\u200C\u0647\u0627"),
                React.createElement("div", { className: "flex w-full mx-auto gap-3 overflow-x-scroll whitespace-nowrap" }, books === null || books === void 0 ? void 0 : books.map(function (book) { return (React.createElement(Books_1["default"], { key: book.id, book: book, updateBookStatus: updateBookStatus, deleteBook: deleteBook })); })),
                React.createElement("p", { className: "text-gray-700 mt-2" },
                    "\u06A9\u062A\u0627\u0628 \u0647\u0627\u06CC\u06CC \u06A9\u0647 \u062F\u0631 \u062D\u0627\u0644 \u0645\u0637\u0627\u0644\u0639\u0647 \u0647\u0633\u062A\u0646\u062F \u0648\u0627\u0631\u062F \u0635\u0641\u062D\u0647 \u06CC ",
                    React.createElement(link_1["default"], { className: "text-blue-500 hover:text-blue-700", href: "/my-books" }, "\u0642\u0641\u0633\u0647 \u06CC \u0645\u0646 "),
                    " \u0645\u06CC \u0634\u0648\u0646\u062F \u0648 \u062F\u0631 \u0622\u0646 \u0635\u0641\u062D\u0647 \u0642\u0627\u0628\u0644 \u0645\u062F\u06CC\u0631\u06CC\u062A \u0647\u0633\u062A\u0646\u062F")))));
}
exports["default"] = Home;
