"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SemesterButtonVariant = void 0;
const react_1 = __importDefault(require("react"));
require("./SemesterButton.sass");
var SemesterButtonVariant;
(function (SemesterButtonVariant) {
    SemesterButtonVariant["activeSemester"] = "semester-button__active-semester";
    SemesterButtonVariant["inactiveSemester"] = "semester-button__inactive-semester";
    SemesterButtonVariant["inactiveDegree"] = "semester-button__inactive-degree";
    SemesterButtonVariant["activeDegree"] = "semester-button__active-degree";
})(SemesterButtonVariant = exports.SemesterButtonVariant || (exports.SemesterButtonVariant = {}));
const SemesterButton = ({ children, variant, onClick }) => {
    return (react_1.default.createElement("div", { onClick: onClick, className: "semester-button " + variant }, children));
};
exports.default = SemesterButton;
