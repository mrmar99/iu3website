import React, { FC } from 'react';
import {CREDIT_UNIT_IN_HOURS} from "../../utils/consts";
import IDiscipline from "../../interfaces/discipline";
import {Link} from "react-router-dom";
import {declensions} from "../../utils/declensions";

import "./Semester.sass";

interface ISemesterProps {
    semester: number;
    disciplines: IDiscipline[];
    disciplineSearchValue: string;
}

const Semester: FC<ISemesterProps> = ({
    semester,
    disciplines,
    disciplineSearchValue
    }) => {
    const declWords: Array<string> = ['час', 'часа', 'часов'];

    return (
        <div className="semester">
            <span className="semester__title">{semester} семестр</span>
            <div className="semester-disciplines">
                {
                    disciplines
                        .filter((discipline) =>
                            discipline.name.toLowerCase().includes(disciplineSearchValue.toLowerCase())
                        )
                        .map((discipline) => {
                            const { name, creditUnits } = discipline;
                            return (
                                <Link
                                    className="semester-discipline"
                                    to={`/discipline/${discipline.id}`}
                                >
                                    <span className="semester-discipline__name">{name}</span>
                                    <span className="semester-discipline__duration">
                                        {creditUnits * CREDIT_UNIT_IN_HOURS}
                                        {" "}
                                        {declensions(creditUnits * CREDIT_UNIT_IN_HOURS, declWords)}
                                    </span>
                                </Link>
                            )
                        })
                }
            </div>
        </div>
    );
};

export default Semester;