"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
require("./StaffCard.sass");
const react_svg_1 = require("react-svg");
// @ts-ignore
const email_svg_1 = __importDefault(require("../../assets/svgs/email.svg"));
// @ts-ignore
const phone_svg_1 = __importDefault(require("../../assets/svgs/phone.svg"));
// @ts-ignore
const website_svg_1 = __importDefault(require("../../assets/svgs/website.svg"));
// @ts-ignore
const linkedin_svg_1 = __importDefault(require("../../assets/svgs/linkedin.svg"));
// @ts-ignore
const vk_svg_1 = __importDefault(require("../../assets/svgs/vk.svg"));
// @ts-ignore
const twitter_svg_1 = __importDefault(require("../../assets/svgs/twitter.svg"));
// @ts-ignore
const image1_jpg_1 = __importDefault(require("../../assets/image1.jpg"));
const StaffCard = ({ teacher }) => {
    const { photoPath, fullName, email, phone, website, linkedin, vk, twitter, post, degree, about, disciplines } = teacher;
    return (react_1.default.createElement("div", { className: "staff-card" },
        react_1.default.createElement("div", { className: "staff-card__left" },
            react_1.default.createElement("div", { className: "teacher-photo" },
                react_1.default.createElement("img", { src: image1_jpg_1.default, alt: "asdsa" })),
            react_1.default.createElement("div", { className: "teacher-contacts" },
                email !== undefined ?
                    react_1.default.createElement("div", { className: "teacher-contact" },
                        react_1.default.createElement(react_svg_1.ReactSVG, { src: email_svg_1.default }),
                        react_1.default.createElement("span", null, email))
                    : null,
                phone !== undefined ?
                    react_1.default.createElement("div", { className: "teacher-contact" },
                        react_1.default.createElement(react_svg_1.ReactSVG, { src: phone_svg_1.default }),
                        react_1.default.createElement("span", null, phone))
                    : null,
                website !== undefined ?
                    react_1.default.createElement("div", { className: "teacher-contact" },
                        react_1.default.createElement(react_svg_1.ReactSVG, { src: website_svg_1.default }),
                        react_1.default.createElement("span", null, website))
                    : null,
                linkedin !== undefined ?
                    react_1.default.createElement("div", { className: "teacher-contact" },
                        react_1.default.createElement(react_svg_1.ReactSVG, { src: linkedin_svg_1.default }),
                        react_1.default.createElement("span", null, linkedin))
                    : null,
                vk !== undefined ?
                    react_1.default.createElement("div", { className: "teacher-contact" },
                        react_1.default.createElement(react_svg_1.ReactSVG, { src: vk_svg_1.default }),
                        react_1.default.createElement("span", null, vk))
                    : null,
                twitter !== undefined ?
                    react_1.default.createElement("div", { className: "teacher-contact" },
                        react_1.default.createElement(react_svg_1.ReactSVG, { src: twitter_svg_1.default }),
                        react_1.default.createElement("span", null, twitter))
                    : null)),
        react_1.default.createElement("div", { className: "staff-card__right" },
            react_1.default.createElement("span", { className: "teacher-fullname" }, fullName),
            react_1.default.createElement("div", { className: "teacher-status" },
                react_1.default.createElement("span", { className: "teacher-post" }, post),
                degree !== undefined ?
                    react_1.default.createElement(react_1.default.Fragment, null,
                        ",\u00A0",
                        react_1.default.createElement("span", { className: "teacher-degree" }, degree)) :
                    null),
            react_1.default.createElement("div", { className: "teacher-about" }, about),
            disciplines !== undefined ?
                react_1.default.createElement("div", { className: "teacher-disciplines" },
                    react_1.default.createElement("span", { className: "teacher-disciplines__title" }, "\u041F\u0440\u0435\u043F\u043E\u0434\u0430\u0432\u0430\u0435\u043C\u044B\u0435 \u0434\u0438\u0441\u0446\u0438\u043F\u043B\u0438\u043D\u044B"),
                    react_1.default.createElement("ul", { className: "teacher-disciplines__list" }, disciplines === null || disciplines === void 0 ? void 0 : disciplines.map((discipline) => react_1.default.createElement("li", null, discipline.name)))) :
                null)));
};
exports.default = StaffCard;
