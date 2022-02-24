import React, { FC } from "react";
import AccordionGroup from "../components/AccordionGroup/AccordionGroup";

const accordionItems = [
    {
        title: 'Accordion Item 1',
        content: (
            <div>
                <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque enim facere in inventore. Amet aperiam
                    beatae commodi consequatur cumque debitis delectus, id labore, magni molestiae quos recusandae vitae,
                    voluptas voluptates?</div>
                <div>Accusantium adipisci blanditiis debitis est explicabo facilis fugit magni natus nulla, perspiciatis quasi sed
                    sunt. Accusantium aliquid architecto consectetur debitis deleniti eos, libero magni, molestiae odio odit optio
                    quod veniam.</div>
            </div>
        ),
    },
    {
        title: 'Accordion Item 2',
        content: (
            <div>
                <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque enim facere in inventore. Amet aperiam
                    beatae commodi consequatur cumque debitis delectus, id labore, magni molestiae quos recusandae vitae,
                    voluptas voluptates?</div>
                <div>Accusantium adipisci blanditiis debitis est explicabo facilis fugit magni natus nulla, perspiciatis quasi sed
                    sunt. Accusantium aliquid architecto consectetur debitis deleniti eos, libero magni, molestiae odio odit optio
                    quod veniam.</div>
            </div>
        ),
    },
    {
        title: 'Accordion Item 3',
        content: (
            <div>
                <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque enim facere in inventore. Amet aperiam
                    beatae commodi consequatur cumque debitis delectus, id labore, magni molestiae quos recusandae vitae,
                    voluptas voluptates?</div>
                <div>Accusantium adipisci blanditiis debitis est explicabo facilis fugit magni natus nulla, perspiciatis quasi sed
                    sunt. Accusantium aliquid architecto consectetur debitis deleniti eos, libero magni, molestiae odio odit optio
                    quod veniam.</div>
            </div>
        ),
    },
];

interface IHomeProps {}

const Home: FC<IHomeProps> = () => {
    return (
        <div>
            <AccordionGroup items={accordionItems} />
        </div>
    );
};

export default Home;