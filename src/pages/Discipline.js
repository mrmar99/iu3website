"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_router_dom_1 = require("react-router-dom");
const disciplines_1 = __importDefault(require("../fakes/disciplines"));
require("./Discipline.sass");
const disciplines = disciplines_1.default;
const Discipline = () => {
    const { id } = (0, react_router_dom_1.useParams)();
    // @ts-ignore
    const discipline = disciplines.find(discipline => discipline.id === parseInt(id));
    return (react_1.default.createElement("div", { className: "discipline" },
        react_1.default.createElement("span", { className: "discipline__title" }, discipline === null || discipline === void 0 ? void 0 : discipline.name),
        react_1.default.createElement("span", { className: "discipline__semester" }, discipline === null || discipline === void 0 ? void 0 :
            discipline.semester,
            " \u0441\u0435\u043C\u0435\u0441\u0442\u0440"),
        react_1.default.createElement("div", { className: "discipline-content" },
            react_1.default.createElement("div", { className: "discipline-content__block" },
                react_1.default.createElement("span", { className: "discipline-content__title" }, "\u0422\u0440\u0443\u0434\u043E\u0435\u043C\u043A\u043E\u0441\u0442\u044C \u0434\u0438\u0441\u0446\u0438\u043F\u043B\u0438\u043D\u044B:"),
                "\u00A0",
                react_1.default.createElement("span", { className: "discipline__credit-units__num" }, discipline === null || discipline === void 0 ? void 0 : discipline.creditUnits),
                "\u00A0",
                react_1.default.createElement("span", { className: "discipline-content__text" }, "\u0417. \u0415.")),
            react_1.default.createElement("span", { className: "discipline__credit-units__addition" }, "\u0417\u0430\u0447\u0435\u0442\u043D\u0430\u044F \u0435\u0434\u0438\u043D\u0438\u0446\u0430 (\u0417. \u0415.) - \u0435\u0434\u0438\u043D\u0438\u0446\u0430 \u0438\u0437\u043C\u0435\u0440\u0435\u043D\u0438\u044F \u0442\u0440\u0443\u0434\u043E\u0451\u043C\u043A\u043E\u0441\u0442\u0438 \u0443\u0447\u0435\u0431\u043D\u043E\u0433\u043E \u043F\u043B\u0430\u043D\u0430. \u041E\u0434\u043D\u0430 \u0417. \u0415. \u044D\u043A\u0432\u0438\u0432\u0430\u043B\u0435\u043D\u0442\u043D\u0430 36 \u0430\u043A\u0430\u0434\u0435\u043C\u0438\u0447\u0435\u0441\u043A\u0438\u043C \u0447\u0430\u0441\u0430\u043C."),
            react_1.default.createElement("div", { className: "discipline-content__block" },
                react_1.default.createElement("span", { className: "discipline-content__title" }, "\u0422\u0440\u0443\u0434\u043E\u0435\u043C\u043A\u043E\u0441\u0442\u044C \u0434\u0438\u0441\u0446\u0438\u043F\u043B\u0438\u043D\u044B:"),
                "\u00A0",
                react_1.default.createElement("span", { className: "discipline-content__text" }, discipline === null || discipline === void 0 ? void 0 : discipline.department)),
            react_1.default.createElement("div", { className: "discipline-content__block" },
                react_1.default.createElement("span", { className: "discipline-content__title" }, "\u041E \u0434\u0438\u0441\u0446\u0438\u043F\u043B\u0438\u043D\u0435:"),
                "\u00A0",
                react_1.default.createElement("span", { className: "discipline-content__text" }, discipline === null || discipline === void 0 ? void 0 : discipline.text)))));
};
exports.default = Discipline;
