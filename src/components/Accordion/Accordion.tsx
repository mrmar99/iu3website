import React, {FC, ReactChild, ReactNode, useEffect, useState, useRef} from "react";
import {ReactSVG} from "react-svg";
import "./Accordion.sass";

// @ts-ignore
import arrowDown from "../../assets/svgs/arrow-left.svg";

export interface IAccordionItem {
    title: string;
    content: ReactChild | ReactNode;
}

interface IAccordionProps {
    item: IAccordionItem;
}

const Accordion: FC<IAccordionProps> = ({
    item,
}) => {
    const { title, content } = item;

    const [active, setActive] = useState(false);
    const [height, setHeight] = useState(0);

    const inner = useRef<HTMLDivElement | null>(null);

    const onToggleAccordion = () => {
        setActive(prevState => !prevState);
        const currentRef = inner.current;
        if (currentRef) {
            setHeight(active ? 0 : currentRef.scrollHeight);
        }
    };

    return (
        <div className="accordion">
            <div
                className={`accordion-outer ${active ? 'accordion-outer__active' : ''}`}
                onClick={onToggleAccordion}
            >
                <div className="accordion-title">{title}</div>
                <ReactSVG src={arrowDown} />
            </div>
            <div
                className={`accordion-inner ${active ? 'accordion-inner__active' : ''}`}
                ref={inner}
                style={{ maxHeight: `${height}px` }}
            >
                <div className="accordion-inner__content">
                    {content}
                </div>
            </div>
        </div>
    )
}

export default Accordion;
