"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const consts_1 = require("../../utils/consts");
const react_router_dom_1 = require("react-router-dom");
const declensions_1 = require("../../utils/declensions");
require("./Semester.sass");
const Semester = ({ semester, disciplines, disciplineSearchValue }) => {
    const declWords = ['час', 'часа', 'часов'];
    return (react_1.default.createElement("div", { className: "semester" },
        react_1.default.createElement("span", { className: "semester__title" },
            semester,
            " \u0441\u0435\u043C\u0435\u0441\u0442\u0440"),
        react_1.default.createElement("div", { className: "semester-disciplines" }, disciplines
            .filter((discipline) => discipline.name.toLowerCase().includes(disciplineSearchValue.toLowerCase()))
            .map((discipline) => {
            const { name, creditUnits } = discipline;
            return (react_1.default.createElement(react_router_dom_1.Link, { className: "semester-discipline", to: `/discipline/${discipline.id}` },
                react_1.default.createElement("span", { className: "semester-discipline__name" }, name),
                react_1.default.createElement("span", { className: "semester-discipline__duration" },
                    creditUnits * consts_1.CREDIT_UNIT_IN_HOURS,
                    " ",
                    (0, declensions_1.declensions)(creditUnits * consts_1.CREDIT_UNIT_IN_HOURS, declWords))));
        }))));
};
exports.default = Semester;
