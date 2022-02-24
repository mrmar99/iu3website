import React, { FC } from 'react'

import "./DisciplineSearch.sass";

interface IDisciplineSearchProps {
    onChange: (e: any) => void;
    value: string;
}

const DisciplineSearch: FC<IDisciplineSearchProps> = ({onChange, value}) => {
    return (
        <>
            <form className="discipline-search-form">
                <input
                    onChange={onChange}
                    value={value}
                    type="text"
                    placeholder="Поиск по предметам"
                />
            </form>
        </>
    );
};

export default DisciplineSearch;