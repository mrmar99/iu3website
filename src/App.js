"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_router_dom_1 = require("react-router-dom");
const AppRouter_1 = __importDefault(require("./router/AppRouter"));
const HeaderNav_1 = __importDefault(require("./components/HeaderNav/HeaderNav"));
require("./styles/App.sass");
function App() {
    return (react_1.default.createElement(react_router_dom_1.BrowserRouter, null,
        react_1.default.createElement("div", { className: "container" },
            react_1.default.createElement(HeaderNav_1.default, null),
            react_1.default.createElement(AppRouter_1.default, null))));
}
exports.default = App;
