"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.declensions = void 0;
const declensions = (number, words) => words[(number % 100 > 4 && number % 100 < 20) ?
    2 : [2, 0, 1, 1, 1, 2][(number % 10 < 5) ?
    Math.abs(number) % 10 : 5]];
exports.declensions = declensions;
