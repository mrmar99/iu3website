import React, {FC, ReactChildren, ReactNode} from 'react';

import "./SemesterButtonGroup.sass";

interface ISemesterButtonGroupProps {
    children: ReactChildren | ReactNode
}

const SemesterButtonGroup: FC<ISemesterButtonGroupProps> = ({children}) => {
    return (
        <div className="semester-button-group">
            {children}
        </div>
    );
};

export default SemesterButtonGroup;