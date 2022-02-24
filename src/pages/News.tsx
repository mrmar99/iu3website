import React, {FC} from 'react';
import NewsCard from "../components/NewsCard/NewsCard";

interface INewsProps {}

const News: FC<INewsProps> = () => {
    const date: Date = new Date(2022, 2, 18);

    return (
        <div>
            <NewsCard title="Новая дисциплина на 2 курсе" date={date}>
                <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias cum cupiditate dolor ex ipsam non
                    officiis, quaerat quod. Asperiores assumenda deserunt doloribus facere non pariatur velit! Error
                    minus, saepe. Ducimus?
                </div>
                <div>Ab consectetur distinctio, eaque enim eos eum expedita necessitatibus officiis praesentium quidem
                    repudiandae, suscipit tenetur! Blanditiis dolor doloremque ea laborum perspiciatis quam quis,
                    similique velit? Ab amet consectetur necessitatibus omnis.
                </div>
                <div>Cum, error quo. At, atque consequatur corporis dolorem doloremque dolores esse est excepturi,
                    impedit iste nihil non numquam officiis pariatur quasi quod recusandae repudiandae sapiente tempora
                    tempore vel veritatis vitae?
                </div>
            </NewsCard>
            <NewsCard title="Новая дисциплина на 2 курсе" date={date}>
                <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias cum cupiditate dolor ex ipsam non
                    officiis, quaerat quod. Asperiores assumenda deserunt doloribus facere non pariatur velit! Error
                    minus, saepe. Ducimus?
                </div>
                <div>Ab consectetur distinctio, eaque enim eos eum expedita necessitatibus officiis praesentium quidem
                    repudiandae, suscipit tenetur! Blanditiis dolor doloremque ea laborum perspiciatis quam quis,
                    similique velit? Ab amet consectetur necessitatibus omnis.
                </div>
                <div>Cum, error quo. At, atque consequatur corporis dolorem doloremque dolores esse est excepturi,
                    impedit iste nihil non numquam officiis pariatur quasi quod recusandae repudiandae sapiente tempora
                    tempore vel veritatis vitae?
                </div>
            </NewsCard>
        </div>
    );
};

export default News;