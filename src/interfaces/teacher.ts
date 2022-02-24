import IDiscipline from "./discipline";

export default interface ITeacher {
    photoPath?: string;
    fullName: string;
    email?: string;
    phone?: string;
    website?: string;
    linkedin?: string;
    vk?: string;
    twitter?: string;
    post: string;
    degree?: string;
    about: string;
    disciplines?: IDiscipline[]
}