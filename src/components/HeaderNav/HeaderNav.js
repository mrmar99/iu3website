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
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const react_router_dom_1 = require("react-router-dom");
require("./HeaderNav.sass");
var linkTypes;
(function (linkTypes) {
    linkTypes["EXTERNAL"] = "external";
    linkTypes["INTERNAL"] = "internal";
})(linkTypes || (linkTypes = {}));
const HeaderNav = () => {
    const [activeBtn, setActiveBtn] = (0, react_1.useState)("home");
    const pages = [
        { id: "home", name: "Главная", path: "/", type: linkTypes.INTERNAL },
        { id: "news", name: "Новости", path: "/news", type: linkTypes.INTERNAL },
        { id: "staff", name: "Персонал", path: "/staff", type: linkTypes.INTERNAL },
        { id: "schedule", name: "Расписание", path: "https://lks.bmstu.ru/schedule/list", type: linkTypes.EXTERNAL },
        { id: "curriculum", name: "Учебный план", path: "/curriculum", type: linkTypes.INTERNAL }
    ];
    return (react_1.default.createElement("div", { className: "header-nav" },
        react_1.default.createElement("div", { className: "logo" },
            react_1.default.createElement("span", { className: "logo-bmstu" }, "\u041C\u0413\u0422\u0423 \u0438\u043C. \u041D.\u042D. \u0411\u0430\u0443\u043C\u0430\u043D\u0430"),
            react_1.default.createElement("span", { className: "logo-dep" }, "\u0418\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u043E\u043D\u043D\u043D\u044B\u0435 \u0441\u0438\u0441\u0442\u0435\u043C\u044B \u0438 \u0442\u0435\u043B\u0435\u043A\u043E\u043C\u043C\u0443\u043D\u0438\u043A\u0430\u0446\u0438\u0438 (\u0418\u04233)")),
        react_1.default.createElement("nav", null,
            react_1.default.createElement("div", { className: "nav-btns" }, pages.map((page) => {
                if (page.type === linkTypes.INTERNAL) {
                    return react_1.default.createElement(react_router_dom_1.Link, { onClick: () => setActiveBtn(page.id), className: `nav-btn ${activeBtn === page.id ? 'nav-btn__active' : ''}`, to: page.path }, page.name);
                }
                return react_1.default.createElement("a", { className: "nav-btn", href: page.path, target: "_blank" }, page.name);
            })))));
};
exports.default = HeaderNav;
