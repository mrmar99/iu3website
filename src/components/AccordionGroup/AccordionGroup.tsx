import React, {FC, useState} from 'react';
import Accordion, {IAccordionItem} from "../Accordion/Accordion";

import "./AccordionGroup.sass";

interface IAccordionGroupProps {
    items: IAccordionItem[]
}

const AccordionGroup: FC<IAccordionGroupProps> = ({items}) => {
    return (
        <div className="accordion-group">
            {
                items.map((item, index) =>
                    <Accordion key={index} item={item} />
                )
            }
        </div>
    );
};

export default AccordionGroup;