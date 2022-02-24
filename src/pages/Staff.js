"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const StaffCard_1 = __importDefault(require("../components/StaffCard/StaffCard"));
const about = "Lorem ipsum – псевдо-латинский текст, который используется для веб дизайна, типографии, оборудования, и распечатки вместо английского текста для того, чтобы сделать ударение не на содержание, а на элементы дизайна. Такой текст также называется как заполнитель. Это очень удобный инструмент для моделей (макетов). Он помогает выделить визуальные элементы в документе или презентации, например текст, шрифт или разметка. Lorem ipsum по большей части является элементом латинского текста классического автора и философа Цицерона.";
const Staff = () => {
    const teacher = {
        fullName: "Девятков Владимир Валентинович",
        post: "заведующий кафедрой",
        degree: "доктор технических наук",
        about: about,
        email: "testlongemail@longmail.ru",
        disciplines: [
            {
                id: 1,
                name: "Информационная безопасность",
                creditUnits: 2,
                semester: 1,
                department: "ИУ3"
            },
            {
                id: 2,
                name: "Нейронные сети",
                creditUnits: 3,
                semester: 1,
                department: "ИУ3"
            },
        ]
    };
    return (react_1.default.createElement("div", { className: "staff" },
        react_1.default.createElement(StaffCard_1.default, { teacher: teacher }),
        react_1.default.createElement(StaffCard_1.default, { teacher: teacher }),
        react_1.default.createElement(StaffCard_1.default, { teacher: teacher }),
        react_1.default.createElement(StaffCard_1.default, { teacher: teacher }),
        react_1.default.createElement(StaffCard_1.default, { teacher: teacher })));
};
exports.default = Staff;
