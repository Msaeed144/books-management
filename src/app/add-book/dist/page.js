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
function AddBook() {
    var _this = this;
    var _a = react_1.useState(''), title = _a[0], setTitle = _a[1];
    var _b = react_1.useState(''), author = _b[0], setAuthor = _b[1];
    var _c = react_1.useState(''), publisher = _c[0], setPublisher = _c[1];
    var _d = react_1.useState(''), pages = _d[0], setPages = _d[1];
    var _e = react_1.useState(''), errorMessage = _e[0], setErrorMessage = _e[1]; // برای نمایش خطا
    var handleSubmit = function (e) { return __awaiter(_this, void 0, void 0, function () {
        var newBook, response, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    e.preventDefault();
                    // چک کردن اینکه همه فیلدها پر شده باشند
                    if (!title || !author || !publisher || !pages) {
                        setErrorMessage('لطفاً همه فیلدها را پر کنید.');
                        setTimeout(function () { return setErrorMessage(''); }, 3000); // خطا بعد از ۳ ثانیه پاک می‌شود
                        return [2 /*return*/];
                    }
                    newBook = {
                        title: title,
                        author: author,
                        publisher: publisher,
                        pages: parseInt(pages),
                        read: 0,
                        isReading: false
                    };
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, fetch('http://localhost:5500/api/books', {
                            method: 'post',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify(newBook)
                        })];
                case 2:
                    response = _a.sent();
                    if (response.ok) {
                        console.log('کتاب با موفقیت اضافه شد');
                        setTitle('');
                        setAuthor('');
                        setPublisher('');
                        setPages('');
                    }
                    else {
                        console.log('خطایی در اضافه کردن کتاب رخ داد');
                    }
                    return [3 /*break*/, 4];
                case 3:
                    error_1 = _a.sent();
                    console.error('Error:', error_1);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    return (React.createElement("div", { className: "flex justify-center mt-4 w-full" },
        React.createElement("div", { className: "w-full" },
            React.createElement("form", { onSubmit: handleSubmit, className: "w-[85%] mx-auto border rounded-xl border-transparent bg-gray-100 p-3 flex flex-col" },
                React.createElement("div", { className: "flex flex-wrap justify-start gap-4" },
                    React.createElement("div", { className: "flex" },
                        React.createElement("label", { htmlFor: "title", className: "mx-2" }, "\u0646\u0627\u0645 \u06A9\u062A\u0627\u0628"),
                        React.createElement("input", { value: title, onChange: function (e) { return setTitle(e.target.value); }, type: "text", id: "title", className: "bg-transparent border rounded-md border-gray-400" })),
                    React.createElement("div", { className: "flex" },
                        React.createElement("label", { htmlFor: "author", className: "mx-2" }, "\u0646\u0627\u0645 \u0646\u0648\u06CC\u0633\u0646\u062F\u0647"),
                        React.createElement("input", { value: author, onChange: function (e) { return setAuthor(e.target.value); }, type: "text", id: "author", className: "bg-transparent border rounded-md border-gray-400" })),
                    React.createElement("div", { className: "flex" },
                        React.createElement("label", { htmlFor: "publisher", className: "mx-2" }, "\u0646\u0627\u0645 \u0627\u0646\u062A\u0634\u0627\u0631\u0627\u062A"),
                        React.createElement("input", { value: publisher, onChange: function (e) { return setPublisher(e.target.value); }, type: "text", id: "publisher", className: "bg-transparent border rounded-md border-gray-400" })),
                    React.createElement("div", { className: "flex" },
                        React.createElement("label", { htmlFor: "pages", className: "mx-2" }, "\u062A\u0639\u062F\u0627\u062F \u0635\u0641\u062D\u0627\u062A"),
                        React.createElement("input", { value: pages, onChange: function (e) { return setPages(e.target.value); }, type: "number", id: "pages", className: "bg-transparent border rounded-md border-gray-400" }))),
                errorMessage && (React.createElement("p", { className: "text-red-500 mt-2 text-center" }, errorMessage)),
                React.createElement("button", { type: "submit", className: "bg-green-400 text-white hover:bg-green-500 w-1/3 mx-auto rounded-md p-2" }, "\u0627\u0636\u0627\u0641\u0647 \u06A9\u0631\u062F\u0646 \u06A9\u062A\u0627\u0628")))));
}
exports["default"] = AddBook;
