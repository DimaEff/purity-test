import { scroller } from "react-scroll";

import { routes } from "./consts/route";


export const getLocaleName = (names: string[]) => {
    return names.join(".");
}

export const scrollTo = (to: string) => {
    scroller.scrollTo(routes[to], {
        spy: true,
        smooth: true,
        duration: 500,
    });
}