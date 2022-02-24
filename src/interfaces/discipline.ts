export default interface IDiscipline {
    id: number;
    name: string;
    creditUnits: number;
    semester: number;
    department: string;
    text?: string;
}