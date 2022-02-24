"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
require("./DisciplineSearch.sass");
const DisciplineSearch = ({ onChange, value }) => {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("form", { className: "discipline-search-form" },
            react_1.default.createElement("input", { onChange: onChange, value: value, type: "text", placeholder: "\u041F\u043E\u0438\u0441\u043A \u043F\u043E \u043F\u0440\u0435\u0434\u043C\u0435\u0442\u0430\u043C" }))));
};
exports.default = DisciplineSearch;
