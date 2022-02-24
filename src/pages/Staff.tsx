import React, { FC } from 'react';
import StaffCard from "../components/StaffCard/StaffCard";
import ITeacher from "../interfaces/teacher";

interface IStaffProps {}

const about: string = "Lorem ipsum – псевдо-латинский текст, который используется для веб дизайна, типографии, оборудования, и распечатки вместо английского текста для того, чтобы сделать ударение не на содержание, а на элементы дизайна. Такой текст также называется как заполнитель. Это очень удобный инструмент для моделей (макетов). Он помогает выделить визуальные элементы в документе или презентации, например текст, шрифт или разметка. Lorem ipsum по большей части является элементом латинского текста классического автора и философа Цицерона.";

const Staff: FC<IStaffProps> = () => {
    const teacher: ITeacher = {
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

    return (
        <div className="staff">
            <StaffCard teacher={teacher} />
            <StaffCard teacher={teacher} />
            <StaffCard teacher={teacher} />
            <StaffCard teacher={teacher} />
            <StaffCard teacher={teacher} />
        </div>
    );
};

export default Staff;