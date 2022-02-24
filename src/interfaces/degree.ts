import ISemester from "./semester";

export default interface IDegree {
    degreeId: number;
    degreeName: string;
    semesters: ISemester[];
}