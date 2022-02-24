import React, { useState } from "react";
import {Link} from "react-router-dom";

import "./HeaderNav.sass";

enum linkTypes {
    EXTERNAL = "external",
    INTERNAL = "internal"
}

interface IPage {
    id: string;
    name: string;
    path: string;
    type: linkTypes;
}

const HeaderNav = () => {
    const [activeBtn, setActiveBtn] = useState("home");

    const pages: IPage[] = [
        { id: "home", name: "Главная", path: "/", type: linkTypes.INTERNAL },
        { id: "news", name: "Новости", path: "/news", type: linkTypes.INTERNAL },
        { id: "staff", name: "Персонал", path: "/staff", type: linkTypes.INTERNAL },
        { id: "schedule", name: "Расписание", path: "https://lks.bmstu.ru/schedule/list", type: linkTypes.EXTERNAL },
        { id: "curriculum", name: "Учебный план", path: "/curriculum", type: linkTypes.INTERNAL }
    ];

    return (
        <div className="header-nav">
            <div className="logo">
                <span className="logo-bmstu">МГТУ им. Н.Э. Баумана</span>
                <span className="logo-dep">Информационнные системы и телекоммуникации (ИУ3)</span>
            </div>
            <nav>
                <div className="nav-btns">
                    {
                        pages.map((page) => {
                            if (page.type === linkTypes.INTERNAL) {
                                return <Link
                                    onClick={() => setActiveBtn(page.id)}
                                    className={`nav-btn ${activeBtn === page.id ? 'nav-btn__active' : ''}`}
                                    to={page.path}
                                >{page.name}</Link>
                            }
                            return <a className="nav-btn" href={page.path} target="_blank">{page.name}</a>
                        })
                    }
                </div>
            </nav>
        </div>
    )
}

export default HeaderNav;