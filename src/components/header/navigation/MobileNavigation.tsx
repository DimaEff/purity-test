import React from 'react';
import { MenuItem, Select } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

import { Route, routes } from "../../../consts/route";
import HashLink from "../HashLink";


const MobileNavigation = () => {
    const keys = Object.keys(routes);

    return (
        <Select IconComponent={MenuIcon}>
            {keys.map((to: Route) => <MenuItem key={to.toString()}>
                <HashLink to={to} variant={"link"}/>
            </MenuItem>)}
        </Select>
    );
};

export default MobileNavigation;