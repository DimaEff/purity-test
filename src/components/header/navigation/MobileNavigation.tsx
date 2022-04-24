import React, { useState } from 'react';
import { MenuItem, Select } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ClearIcon from '@mui/icons-material/Clear';

import HashLink from "../HashLink";
import { Route, routes } from "../../../consts/route";


const MobileNavigation = () => {
    const keys = Object.keys(routes);
    const [open, setOpen] = useState(false);

    return (
        <Select
            open={open}
            onOpen={() => setOpen(true)}
            onClose={() => setOpen(false)}
            IconComponent={open ? ClearIcon : MenuIcon}
        >
            {keys.map((to: Route) => <MenuItem key={to.toString()}>
                <HashLink to={to} variant={"link"}/>
            </MenuItem>)}
        </Select>
    );
};

export default MobileNavigation;