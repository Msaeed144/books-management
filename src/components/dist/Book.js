"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Books = function (_a) {
    var book = _a.book, updateBookStatus = _a.updateBookStatus;
    return (react_1["default"].createElement("div", { className: "text-center min-w-[150px] max-w-[150px] border rounded-md border-gray-300 px-2 py-4 bg-gray-50 shadow-xl" },
        react_1["default"].createElement("h4", { className: "mb-2" }, book.title),
        react_1["default"].createElement("p", { className: "mb-2" },
            "\u0646\u0648\u06CC\u0633\u0646\u062F\u0647: ",
            react_1["default"].createElement("span", null, book.author)),
        react_1["default"].createElement("p", { className: "mb-2" },
            "\u0646\u0634\u0631: ",
            react_1["default"].createElement("span", null, book.publisher)),
        react_1["default"].createElement("div", null,
            react_1["default"].createElement("button", { className: "text-white p-1 rounded-md " + (book.isReading ? "bg-red-500" : "bg-green-500"), onClick: function () { return updateBookStatus(book.id, book.isReading); } }, book.isReading ? "پایان مطالعه" : "شروع مطالعه"))));
};
exports["default"] = Books;
