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
var MyBook = function (_a) {
    var book = _a.book;
    var _b = react_1.useState(book.read.toString()), readPage = _b[0], setReadPage = _b[1];
    var _c = react_1.useState(book.read), localRead = _c[0], setLocalRead = _c[1];
    var updateReadPage = function (e) { return __awaiter(void 0, void 0, void 0, function () {
        var response, updatedBook, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    e.preventDefault();
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 4, , 5]);
                    return [4 /*yield*/, fetch("http://localhost:5500/api/books/" + book.id, {
                            method: "PUT",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify({ read: parseInt(readPage) })
                        })];
                case 2:
                    response = _a.sent();
                    if (!response.ok) {
                        throw new Error("Failed to update the book");
                    }
                    return [4 /*yield*/, response.json()];
                case 3:
                    updatedBook = _a.sent();
                    console.log("Book updated:", updatedBook);
                    setLocalRead(updatedBook.read);
                    return [3 /*break*/, 5];
                case 4:
                    error_1 = _a.sent();
                    console.error("Error updating the book:", error_1);
                    return [3 /*break*/, 5];
                case 5: return [2 /*return*/];
            }
        });
    }); };
    return (React.createElement("div", { className: "flex justify-around w-full bg-gray-100 shadow-lg rounded-lg my-2 p-2 h-[7rem]" },
        React.createElement("p", { className: "my-auto text-lg" }, book.title),
        React.createElement("div", { className: "my-auto text-center flex flex-col gap-2" },
            React.createElement("p", null,
                "\u0646\u0648\u0634\u062A\u0647\u200C\u06CC ",
                React.createElement("span", null, book.author)),
            React.createElement("p", null,
                "\u0646\u0634\u0631 ",
                React.createElement("span", null, book.publisher))),
        React.createElement("div", { className: "my-auto text-center flex flex-col gap-2" },
            React.createElement("p", null,
                "\u062A\u0639\u062F\u0627\u062F \u0635\u0641\u062D\u0627\u062A \u06A9\u062A\u0627\u0628: ",
                book.pages),
            React.createElement("p", null,
                "\u062A\u0639\u062F\u0627\u062F \u0635\u0641\u062D\u0627\u062A \u062E\u0648\u0627\u0646\u062F\u0647 \u0634\u062F\u0647: ",
                localRead),
            React.createElement("p", null,
                ((localRead / book.pages) * 100).toFixed(2),
                " \u062F\u0631\u0635\u062F \u0627\u0632 \u06A9\u062A\u0627\u0628 \u062E\u0648\u0627\u0646\u062F\u0647 \u0634\u062F\u0647")),
        React.createElement("form", { onSubmit: updateReadPage, className: "my-auto text-center flex flex-col gap-2" },
            React.createElement("div", null,
                React.createElement("label", { htmlFor: "readpage" }, "\u062A\u0639\u062F\u0627\u062F \u0635\u0641\u062D\u0627\u062A \u062E\u0648\u0627\u0646\u062F\u0647 \u0634\u062F\u0647: "),
                React.createElement("input", { value: readPage, onChange: function (e) { return setReadPage(e.target.value); }, type: "number", name: "readpage", id: "readpage", className: "bg-transparent border border-gray-300 rounded-lg p-1", placeholder: "\u0686\u0646\u062F \u0635\u0641\u062D\u0647 \u062E\u0648\u0646\u062F\u06CC\u061F", max: book.pages })),
            React.createElement("button", { type: "submit", className: "bg-green-500 px-2 py-1 text-white hover:bg-green-600 rounded-md w-1/3 mx-auto" }, "\u062B\u0628\u062A \u062A\u063A\u06CC\u06CC\u0631\u0627\u062A"))));
};
exports["default"] = MyBook;
