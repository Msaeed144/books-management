/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
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
var Books_1 = require("@/components/Books");
var react_1 = require("react");
var react_loader_spinner_1 = require("react-loader-spinner");
function Search() {
    var _this = this;
    var _a = react_1.useState(), books = _a[0], setBooks = _a[1];
    var _b = react_1.useState(true), loading = _b[0], setLoading = _b[1];
    var _c = react_1.useState(null), error = _c[0], setError = _c[1];
    var _d = react_1.useState(""), search = _d[0], setSearch = _d[1];
    react_1.useEffect(function () {
        //fetch book
        var fetchBooks = function () { return __awaiter(_this, void 0, void 0, function () {
            var response, data, filteredBooks, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, fetch("http://localhost:5500/api/books")];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.json()];
                    case 2:
                        data = _a.sent();
                        if (search) {
                            filteredBooks = data.filter(function (book) { return book.title.includes(search); });
                            setBooks(filteredBooks);
                            setLoading(false);
                        }
                        else {
                            setBooks(data);
                            setLoading(false);
                        }
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
    }, [search]);
    //update book (read or not)
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
    //delete book function
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
        return (React.createElement("div", { className: "flex justify-center mt-4 w-full" },
            React.createElement("div", { className: "w-full" },
                React.createElement("div", { className: "w-[85%] flex justify-center mx-auto p-4 items-center bg-gray-100 border border-gray-300 bg-opacity-40 shadow-lg rounded-md min-h-96" },
                    React.createElement(react_loader_spinner_1.Circles, { height: "80", width: "80", color: "#8b8b8b", ariaLabel: "circles-loading", wrapperStyle: {}, wrapperClass: "", visible: true })))));
    }
    return (React.createElement("div", { className: "flex justify-center mt-4 w-full" },
        React.createElement("div", { className: "w-full" },
            React.createElement("div", { className: "w-[85%] mx-auto p-4 bg-gray-100 border border-gray-300 bg-opacity-40 shadow-lg rounded-md min-h-96" },
                React.createElement("div", null,
                    React.createElement("label", { htmlFor: "" }, " \u0646\u0627\u0645 \u06A9\u062A\u0627\u0628 \u060C \u0646\u0648\u06CC\u0633\u0646\u062F\u0647 \u0648 \u0646\u0627\u0634\u0631 : "),
                    React.createElement("input", { value: search, onChange: function (e) { return setSearch(e.target.value); }, className: "bg-transparent border   border-gray-500 p-1 rounded-md", type: "text", name: "", id: "", placeholder: "\u062F\u0646\u0628\u0627\u0644 \u0686\u06CC \u0645\u06CC \u06AF\u0631\u062F\u06CC" })),
                React.createElement("div", { className: " grid grid-cols-5 gap-4 my-4" }, books === null || books === void 0 ? void 0 : books.map(function (book) { return (React.createElement(Books_1["default"], { book: book, deleteBook: deleteBook, updateBookStatus: updateBookStatus, key: book.id })); }))))));
}
exports["default"] = Search;
