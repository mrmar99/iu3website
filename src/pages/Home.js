"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const AccordionGroup_1 = __importDefault(require("../components/AccordionGroup/AccordionGroup"));
const accordionItems = [
    {
        title: 'Accordion Item 1',
        content: (react_1.default.createElement("div", null,
            react_1.default.createElement("div", null, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque enim facere in inventore. Amet aperiam beatae commodi consequatur cumque debitis delectus, id labore, magni molestiae quos recusandae vitae, voluptas voluptates?"),
            react_1.default.createElement("div", null, "Accusantium adipisci blanditiis debitis est explicabo facilis fugit magni natus nulla, perspiciatis quasi sed sunt. Accusantium aliquid architecto consectetur debitis deleniti eos, libero magni, molestiae odio odit optio quod veniam."))),
    },
    {
        title: 'Accordion Item 2',
        content: (react_1.default.createElement("div", null,
            react_1.default.createElement("div", null, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque enim facere in inventore. Amet aperiam beatae commodi consequatur cumque debitis delectus, id labore, magni molestiae quos recusandae vitae, voluptas voluptates?"),
            react_1.default.createElement("div", null, "Accusantium adipisci blanditiis debitis est explicabo facilis fugit magni natus nulla, perspiciatis quasi sed sunt. Accusantium aliquid architecto consectetur debitis deleniti eos, libero magni, molestiae odio odit optio quod veniam."))),
    },
    {
        title: 'Accordion Item 3',
        content: (react_1.default.createElement("div", null,
            react_1.default.createElement("div", null, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque enim facere in inventore. Amet aperiam beatae commodi consequatur cumque debitis delectus, id labore, magni molestiae quos recusandae vitae, voluptas voluptates?"),
            react_1.default.createElement("div", null, "Accusantium adipisci blanditiis debitis est explicabo facilis fugit magni natus nulla, perspiciatis quasi sed sunt. Accusantium aliquid architecto consectetur debitis deleniti eos, libero magni, molestiae odio odit optio quod veniam."))),
    },
];
const Home = () => {
    return (react_1.default.createElement("div", null,
        react_1.default.createElement(AccordionGroup_1.default, { items: accordionItems })));
};
exports.default = Home;
