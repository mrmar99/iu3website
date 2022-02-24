"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
require("./NewsCard.sass");
const NewsCard = ({ title, children, date }) => {
    const strDate = date.toLocaleDateString();
    return (react_1.default.createElement("div", { className: "news-card" },
        react_1.default.createElement("div", { className: "news-card__title" }, title),
        react_1.default.createElement("div", { className: "news-card__body" }, children),
        react_1.default.createElement("div", { className: "news-card__date" }, strDate)));
};
exports.default = NewsCard;
