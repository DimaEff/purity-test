import React from 'react';
import { Stack } from "@mui/material";

import HashLink from "../HashLink";
import { routes } from "../../../consts/route";


const DesktopNavigation = () => {
    const keys = Object.keys(routes);

    return (
        <>
            <Stack spacing={1} direction={"row"}>
                {keys.map((to) => <HashLink key={to.toString()} to={to}/>)}
            </Stack>
        </>
    );
};

export default DesktopNavigation;