import React, { FC } from 'react';
import {ReactSVG} from "react-svg";

import "./CreateButton.sass";

// @ts-ignore
import plusSquare from "../../assets/svgs/plus-square.svg";

interface ICreateButtonProps {}

const CreateButton: FC<ICreateButtonProps> = () => {
    return (
        <div className="create-button">
            <ReactSVG src={plusSquare} />
        </div>
    );
};

export default CreateButton;