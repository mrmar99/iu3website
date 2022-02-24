import React, {FC, ReactChild, ReactNode} from 'react';

import "./NewsCard.sass";

interface INewsCardProps {
    title: string;
    children: ReactChild | ReactNode;
    date: Date;
}

const NewsCard: FC<INewsCardProps> = ({title, children, date}) => {
    const strDate = date.toLocaleDateString();

    return (
        <div className="news-card">
            <div className="news-card__title">{title}</div>
            <div className="news-card__body">{children}</div>
            <div className="news-card__date">{strDate}</div>
        </div>
    );
};

export default NewsCard;