import IDiscipline from "./discipline";

export default interface ISemester {
    semesterId: number;
    semesterNumber: number;
    disciplines: IDiscipline[];
}