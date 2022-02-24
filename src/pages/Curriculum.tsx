import React, { FC, useState } from 'react';
import DisciplineSearch from "../components/DisciplineSearch/DisciplineSearch";
import SemesterButtonGroup from "../components/SemesterButtonGroup/SemesterButtonGroup";
import Semester from "../components/Semester/Semester";
import SemesterButton, {SemesterButtonVariant} from "../components/SemesterButton/SemesterButton";

import IDegree from "../interfaces/degree";

import fakeDegrees from "../fakes/degrees";

const degrees: IDegree[] = fakeDegrees;

interface ICurriculumProps {}

const Curriculum: FC<ICurriculumProps> = () => {
    const [activeDegree, setActiveDegree] = useState("bachelor");
    const [activeSemester, setActiveSemester] = useState(0);
    const [disciplineSearchInput, setDisciplineSearchInput] = useState("");

    const toggleDegree = (degree: string) => {
        setActiveDegree(degree);
        setActiveSemester(0);
    }

    return (
        <>
            <SemesterButtonGroup>
                <SemesterButton
                    onClick={() => toggleDegree("bachelor")}
                    variant={
                        activeDegree === "bachelor" ?
                            SemesterButtonVariant.activeDegree :
                            SemesterButtonVariant.inactiveDegree
                    }
                >Бакалавриат</SemesterButton>
                <SemesterButton
                    onClick={() => toggleDegree("master")}
                    variant={
                        activeDegree === "master" ?
                            SemesterButtonVariant.activeDegree :
                            SemesterButtonVariant.inactiveDegree
                    }
                >Магистратура</SemesterButton>
            </SemesterButtonGroup>
            <SemesterButtonGroup>
                <SemesterButton
                    onClick={() => setActiveSemester(0)}
                    variant={
                        activeSemester === 0 ?
                            SemesterButtonVariant.activeSemester :
                            SemesterButtonVariant.inactiveSemester
                    }
                >Все семестры</SemesterButton>
                {
                    degrees.map((degree) => {
                        if (degree.degreeName === activeDegree) {
                            return (
                                degree.semesters.map((semester) => {
                                    return (
                                        <SemesterButton
                                            onClick={() => setActiveSemester(semester.semesterNumber)}
                                            variant={
                                                activeSemester === semester.semesterNumber ?
                                                    SemesterButtonVariant.activeSemester :
                                                    SemesterButtonVariant.inactiveSemester
                                            }
                                        >{semester.semesterNumber}</SemesterButton>
                                    )
                                })
                            )
                        }
                    })
                }
            </SemesterButtonGroup>
            <DisciplineSearch
                onChange={(e) => setDisciplineSearchInput(e.target.value)}
                value={disciplineSearchInput}
            />
            {
                degrees.map((degree) => {
                    if (degree.degreeName === activeDegree) {
                        return (
                            degree.semesters.map((semester) => {
                                if (activeSemester === semester.semesterNumber || activeSemester === 0) {
                                    return (
                                        <Semester
                                            semester={semester.semesterNumber}
                                            disciplines={semester.disciplines}
                                            disciplineSearchValue={disciplineSearchInput}
                                        />
                                    )
                                }
                            })
                        )
                    }
                })
            }
        </>
    );
};

export default Curriculum;