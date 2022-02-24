"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.publicRoutes = void 0;
const Home_1 = __importDefault(require("../pages/Home"));
const News_1 = __importDefault(require("../pages/News"));
const Staff_1 = __importDefault(require("../pages/Staff"));
const Curriculum_1 = __importDefault(require("../pages/Curriculum"));
const Discipline_1 = __importDefault(require("../pages/Discipline"));
const consts_1 = require("../utils/consts");
exports.publicRoutes = [
    {
        path: consts_1.HOME_ROUTE,
        Component: Home_1.default
    },
    {
        path: consts_1.NEWS_ROUTE,
        Component: News_1.default
    },
    {
        path: consts_1.STAFF_ROUTE,
        Component: Staff_1.default
    },
    {
        path: consts_1.CURRICULUM_ROUTE,
        Component: Curriculum_1.default
    },
    {
        path: consts_1.DISCIPLINE_ROUTE,
        Component: Discipline_1.default
    }
];
