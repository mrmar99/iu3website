import React, {FC, ReactChildren, ReactNode} from 'react';

import "./SemesterButton.sass";

export enum SemesterButtonVariant {
    activeSemester = "semester-button__active-semester",
    inactiveSemester = "semester-button__inactive-semester",
    inactiveDegree = "semester-button__inactive-degree",
    activeDegree = "semester-button__active-degree"
}

interface ISemesterButtonProps {
    children: ReactChildren | ReactNode;
    variant: SemesterButtonVariant;
    onClick?: () => void;
}

const SemesterButton: FC<ISemesterButtonProps> = ({
        children,
        variant,
        onClick
    }) => {
    return (
        <div
            onClick={onClick}
            className={"semester-button " + variant}
        >
            {children}
        </div>
    );
};

export default SemesterButton;