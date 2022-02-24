import Home from "../pages/Home";
import News from "../pages/News";
import Staff from "../pages/Staff";
import Curriculum from "../pages/Curriculum";
import Discipline from "../pages/Discipline";

import {
    HOME_ROUTE,
    NEWS_ROUTE,
    STAFF_ROUTE,
    CURRICULUM_ROUTE,
    DISCIPLINE_ROUTE
} from "../utils/consts";

interface route {
    path: string,
    Component: any
}

export const publicRoutes: route[] = [
    {
        path: HOME_ROUTE,
        Component: Home
    },
    {
        path: NEWS_ROUTE,
        Component: News
    },
    {
        path: STAFF_ROUTE,
        Component: Staff
    },
    {
        path: CURRICULUM_ROUTE,
        Component: Curriculum
    },
    {
        path: DISCIPLINE_ROUTE,
        Component: Discipline
    }
];