"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const react_svg_1 = require("react-svg");
require("./Accordion.sass");
// @ts-ignore
const arrow_left_svg_1 = __importDefault(require("../../assets/svgs/arrow-left.svg"));
const Accordion = ({ item, }) => {
    const { title, content } = item;
    const [active, setActive] = (0, react_1.useState)(false);
    const [height, setHeight] = (0, react_1.useState)(0);
    const inner = (0, react_1.useRef)(null);
    const onToggleAccordion = () => {
        setActive(prevState => !prevState);
        const currentRef = inner.current;
        if (currentRef) {
            setHeight(active ? 0 : currentRef.scrollHeight);
        }
    };
    return (react_1.default.createElement("div", { className: "accordion" },
        react_1.default.createElement("div", { className: `accordion-outer ${active ? 'accordion-outer__active' : ''}`, onClick: onToggleAccordion },
            react_1.default.createElement("div", { className: "accordion-title" }, title),
            react_1.default.createElement(react_svg_1.ReactSVG, { src: arrow_left_svg_1.default })),
        react_1.default.createElement("div", { className: `accordion-inner ${active ? 'accordion-inner__active' : ''}`, ref: inner, style: { maxHeight: `${height}px` } },
            react_1.default.createElement("div", { className: "accordion-inner__content" }, content))));
};
exports.default = Accordion;
