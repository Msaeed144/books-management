'use client';
"use strict";
exports.__esModule = true;
var link_1 = require("next/link");
var react_1 = require("react");
var Hamburger = function () {
    var _a = react_1.useState(false), hamburger = _a[0], setHamburger = _a[1];
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: "py-3 md:hidden flex flex-col gap-1 ms-5", onClick: function () { return setHamburger(!hamburger); } },
            React.createElement("span", { className: " bg-red-500 w-5 h-1 rounded-md transition-all " + (hamburger ? " rotate-[135deg] translate-y-2" : "") }),
            React.createElement("span", { className: " bg-red-500 w-5 h-1 rounded-md transition-all " + (hamburger ? "hidden" : "") }),
            React.createElement("span", { className: " bg-red-500 w-5 h-1 rounded-md transition-all " + (hamburger ? " rotate-[-135deg]" : "") })),
        React.createElement("div", { className: "w-screen h-screen bg-white " + (!hamburger && "hidden") },
            React.createElement("ul", { className: "m-4" },
                React.createElement("li", { className: "flex gap-3" },
                    React.createElement("svg", { width: "17px", height: "17px", viewBox: "0 0 1024 1024", className: "icon", version: "1.1", xmlns: "http://www.w3.org/2000/svg", fill: "#000000" },
                        React.createElement("g", { id: "SVGRepo_bgCarrier", strokeWidth: "0" }),
                        React.createElement("g", { id: "SVGRepo_tracerCarrier", strokeLinecap: "round", strokeLinejoin: "round" }),
                        React.createElement("g", { id: "SVGRepo_iconCarrier" },
                            React.createElement("path", { d: "M691.573 338.89c-1.282 109.275-89.055 197.047-198.33 198.331-109.292 1.282-197.065-90.984-198.325-198.331-0.809-68.918-107.758-68.998-106.948 0 1.968 167.591 137.681 303.31 305.272 305.278C660.85 646.136 796.587 503.52 798.521 338.89c0.811-68.998-106.136-68.918-106.948 0z", fill: "#4A5699" }),
                            React.createElement("path", { d: "M294.918 325.158c1.283-109.272 89.051-197.047 198.325-198.33 109.292-1.283 197.068 90.983 198.33 198.33 0.812 68.919 107.759 68.998 106.948 0C796.555 157.567 660.839 21.842 493.243 19.88c-167.604-1.963-303.341 140.65-305.272 305.278-0.811 68.998 106.139 68.919 106.947 0z", fill: "#C45FA0" }),
                            React.createElement("path", { d: "M222.324 959.994c0.65-74.688 29.145-144.534 80.868-197.979 53.219-54.995 126.117-84.134 201.904-84.794 74.199-0.646 145.202 29.791 197.979 80.867 54.995 53.219 84.13 126.119 84.79 201.905 0.603 68.932 107.549 68.99 106.947 0-1.857-213.527-176.184-387.865-389.716-389.721-213.551-1.854-387.885 178.986-389.721 389.721-0.601 68.991 106.349 68.933 106.949 0.001z", fill: "#E5594F" }))),
                    React.createElement("p", null, "\u06A9\u0627\u0631\u0628\u0631 \u0634\u0645\u0627\u0631\u0647 1")),
                React.createElement("li", null,
                    React.createElement(link_1["default"], { onClick: function () { return setHamburger(false); }, href: "/" }, "\u06A9\u062A\u0627\u0628\u062E\u0648\u0646\u0647")),
                React.createElement("li", null,
                    React.createElement(link_1["default"], { onClick: function () { return setHamburger(false); }, href: "/my-books" }, "\u0642\u0641\u0633\u0647 \u0645\u0646 ")),
                React.createElement("li", null,
                    React.createElement(link_1["default"], { onClick: function () { return setHamburger(false); }, href: "/search-page" }, "\u062C\u0633\u062A\u062C\u0648")),
                React.createElement("li", null,
                    React.createElement(link_1["default"], { onClick: function () { return setHamburger(false); }, href: "/add-book" }, "\u0627\u0641\u0632\u0648\u062F\u0646 \u06A9\u062A"))))));
};
exports["default"] = Hamburger;
