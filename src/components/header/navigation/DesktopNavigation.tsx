import React from 'react';
import { Button, Stack } from "@mui/material";
import { useTranslation } from "react-i18next";

import { scrollTo } from "../../../utils";
import { routes } from "../../../consts/route";


const DesktopNavigation = () => {
    const {t} = useTranslation();
    const keys = Object.keys(routes);

    return (
        <>
            <Stack spacing={1} direction={"row"}>
                {keys.map((to) => <Button variant={"text"} onClick={() => scrollTo(to)} key={to.toString()}>
                    {t(routes[to])}
                </Button>)}
            </Stack>
        </>
    );
};

export default DesktopNavigation;