"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_svg_1 = require("react-svg");
require("./CreateButton.sass");
// @ts-ignore
const plus_square_svg_1 = __importDefault(require("../../assets/svgs/plus-square.svg"));
const CreateButton = () => {
    return (react_1.default.createElement("div", { className: "create-button" },
        react_1.default.createElement(react_svg_1.ReactSVG, { src: plus_square_svg_1.default })));
};
exports.default = CreateButton;
