"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Accordion_1 = __importDefault(require("../Accordion/Accordion"));
require("./AccordionGroup.sass");
const AccordionGroup = ({ items }) => {
    return (react_1.default.createElement("div", { className: "accordion-group" }, items.map((item, index) => react_1.default.createElement(Accordion_1.default, { key: index, item: item }))));
};
exports.default = AccordionGroup;
