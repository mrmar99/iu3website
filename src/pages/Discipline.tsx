import React, { FC } from 'react';
import {useParams} from "react-router-dom";

import IDiscipline from "../interfaces/discipline";
import fakeDisciplines from "../fakes/disciplines";

import "./Discipline.sass";

const disciplines: IDiscipline[] = fakeDisciplines;

interface IDisciplineProps {}

const Discipline: FC<IDisciplineProps> = () => {
    const { id } = useParams();

    // @ts-ignore
    const discipline = disciplines.find(discipline => discipline.id === parseInt(id));

    return (
        <div className="discipline">
            <span className="discipline__title">
                {discipline?.name}
            </span>
            <span className="discipline__semester">
                {discipline?.semester} семестр
            </span>
            <div className="discipline-content">
                <div className="discipline-content__block">
                    <span className="discipline-content__title">
                        Трудоемкость дисциплины:
                    </span>
                    &nbsp;
                    <span className="discipline__credit-units__num">
                        {discipline?.creditUnits}
                    </span>
                    &nbsp;
                    <span className="discipline-content__text">
                        З. Е.
                    </span>
                </div>
                <span className="discipline__credit-units__addition">
                    Зачетная единица (З. Е.) - единица измерения трудоёмкости учебного плана.
                    Одна З. Е. эквивалентна 36 академическим часам.
                </span>
                <div className="discipline-content__block">
                    <span className="discipline-content__title">
                        Трудоемкость дисциплины:
                    </span>
                    &nbsp;
                    <span className="discipline-content__text">
                        {discipline?.department}
                    </span>
                </div>
                <div className="discipline-content__block">
                    <span className="discipline-content__title">
                        О дисциплине:
                    </span>
                    &nbsp;
                    <span className="discipline-content__text">
                        {discipline?.text}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Discipline;