"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const NewsCard_1 = __importDefault(require("../components/NewsCard/NewsCard"));
const News = () => {
    const date = new Date(2022, 2, 18);
    return (react_1.default.createElement("div", null,
        react_1.default.createElement(NewsCard_1.default, { title: "\u041D\u043E\u0432\u0430\u044F \u0434\u0438\u0441\u0446\u0438\u043F\u043B\u0438\u043D\u0430 \u043D\u0430 2 \u043A\u0443\u0440\u0441\u0435", date: date },
            react_1.default.createElement("div", null, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias cum cupiditate dolor ex ipsam non officiis, quaerat quod. Asperiores assumenda deserunt doloribus facere non pariatur velit! Error minus, saepe. Ducimus?"),
            react_1.default.createElement("div", null, "Ab consectetur distinctio, eaque enim eos eum expedita necessitatibus officiis praesentium quidem repudiandae, suscipit tenetur! Blanditiis dolor doloremque ea laborum perspiciatis quam quis, similique velit? Ab amet consectetur necessitatibus omnis."),
            react_1.default.createElement("div", null, "Cum, error quo. At, atque consequatur corporis dolorem doloremque dolores esse est excepturi, impedit iste nihil non numquam officiis pariatur quasi quod recusandae repudiandae sapiente tempora tempore vel veritatis vitae?")),
        react_1.default.createElement(NewsCard_1.default, { title: "\u041D\u043E\u0432\u0430\u044F \u0434\u0438\u0441\u0446\u0438\u043F\u043B\u0438\u043D\u0430 \u043D\u0430 2 \u043A\u0443\u0440\u0441\u0435", date: date },
            react_1.default.createElement("div", null, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias cum cupiditate dolor ex ipsam non officiis, quaerat quod. Asperiores assumenda deserunt doloribus facere non pariatur velit! Error minus, saepe. Ducimus?"),
            react_1.default.createElement("div", null, "Ab consectetur distinctio, eaque enim eos eum expedita necessitatibus officiis praesentium quidem repudiandae, suscipit tenetur! Blanditiis dolor doloremque ea laborum perspiciatis quam quis, similique velit? Ab amet consectetur necessitatibus omnis."),
            react_1.default.createElement("div", null, "Cum, error quo. At, atque consequatur corporis dolorem doloremque dolores esse est excepturi, impedit iste nihil non numquam officiis pariatur quasi quod recusandae repudiandae sapiente tempora tempore vel veritatis vitae?"))));
};
exports.default = News;
