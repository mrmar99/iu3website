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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const DisciplineSearch_1 = __importDefault(require("../components/DisciplineSearch/DisciplineSearch"));
const SemesterButtonGroup_1 = __importDefault(require("../components/SemesterButtonGroup/SemesterButtonGroup"));
const Semester_1 = __importDefault(require("../components/Semester/Semester"));
const SemesterButton_1 = __importStar(require("../components/SemesterButton/SemesterButton"));
const degrees_1 = __importDefault(require("../fakes/degrees"));
const degrees = degrees_1.default;
const Curriculum = () => {
    const [activeDegree, setActiveDegree] = (0, react_1.useState)("bachelor");
    const [activeSemester, setActiveSemester] = (0, react_1.useState)(0);
    const [disciplineSearchInput, setDisciplineSearchInput] = (0, react_1.useState)("");
    const toggleDegree = (degree) => {
        setActiveDegree(degree);
        setActiveSemester(0);
    };
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(SemesterButtonGroup_1.default, null,
            react_1.default.createElement(SemesterButton_1.default, { onClick: () => toggleDegree("bachelor"), variant: activeDegree === "bachelor" ?
                    SemesterButton_1.SemesterButtonVariant.activeDegree :
                    SemesterButton_1.SemesterButtonVariant.inactiveDegree }, "\u0411\u0430\u043A\u0430\u043B\u0430\u0432\u0440\u0438\u0430\u0442"),
            react_1.default.createElement(SemesterButton_1.default, { onClick: () => toggleDegree("master"), variant: activeDegree === "master" ?
                    SemesterButton_1.SemesterButtonVariant.activeDegree :
                    SemesterButton_1.SemesterButtonVariant.inactiveDegree }, "\u041C\u0430\u0433\u0438\u0441\u0442\u0440\u0430\u0442\u0443\u0440\u0430")),
        react_1.default.createElement(SemesterButtonGroup_1.default, null,
            react_1.default.createElement(SemesterButton_1.default, { onClick: () => setActiveSemester(0), variant: activeSemester === 0 ?
                    SemesterButton_1.SemesterButtonVariant.activeSemester :
                    SemesterButton_1.SemesterButtonVariant.inactiveSemester }, "\u0412\u0441\u0435 \u0441\u0435\u043C\u0435\u0441\u0442\u0440\u044B"),
            degrees.map((degree) => {
                if (degree.degreeName === activeDegree) {
                    return (degree.semesters.map((semester) => {
                        return (react_1.default.createElement(SemesterButton_1.default, { onClick: () => setActiveSemester(semester.semesterNumber), variant: activeSemester === semester.semesterNumber ?
                                SemesterButton_1.SemesterButtonVariant.activeSemester :
                                SemesterButton_1.SemesterButtonVariant.inactiveSemester }, semester.semesterNumber));
                    }));
                }
            })),
        react_1.default.createElement(DisciplineSearch_1.default, { onChange: (e) => setDisciplineSearchInput(e.target.value), value: disciplineSearchInput }),
        degrees.map((degree) => {
            if (degree.degreeName === activeDegree) {
                return (degree.semesters.map((semester) => {
                    if (activeSemester === semester.semesterNumber || activeSemester === 0) {
                        return (react_1.default.createElement(Semester_1.default, { semester: semester.semesterNumber, disciplines: semester.disciplines, disciplineSearchValue: disciplineSearchInput }));
                    }
                }));
            }
        })));
};
exports.default = Curriculum;
