"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
require("./SemesterButtonGroup.sass");
const SemesterButtonGroup = ({ children }) => {
    return (react_1.default.createElement("div", { className: "semester-button-group" }, children));
};
exports.default = SemesterButtonGroup;
