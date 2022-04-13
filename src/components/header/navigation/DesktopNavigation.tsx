import React from 'react';
import { Stack } from "@mui/material";

import HashLink from "../HashLink";
import { Route, routes } from "../../../consts/route";


const DesktopNavigation = () => {
    const keys = Object.keys(routes);

    return (
        <>
            <Stack spacing={1} direction={"row"}>
                {keys.map((to: Route) => <HashLink key={to.toString()} to={to}/>)}
            </Stack>
        </>
    );
};

export default DesktopNavigation;