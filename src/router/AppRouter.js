"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_router_dom_1 = require("react-router-dom");
const routes_1 = require("./routes");
const AppRouter = () => {
    return (react_1.default.createElement(react_router_dom_1.Routes, null, routes_1.publicRoutes.map(({ path, Component }) => {
        return (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement(react_router_dom_1.Route, { key: path, path: path, element: react_1.default.createElement(Component, null) })));
    })));
};
exports.default = AppRouter;
