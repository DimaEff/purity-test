import React from 'react';
import { IconButton, Menu, MenuItem } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ClearIcon from '@mui/icons-material/Clear';
import { scroller } from "react-scroll";

import { Route, routes } from "../../../consts/route";


const MobileNavigation = () => {
    const keys = Object.keys(routes);

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClickButton = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClickItem = (to: string) => {
        scroller.scrollTo(to, {
            spy: true,
            smooth: true,
            duration: 500,
        });
        setAnchorEl(null);
    };

    return (
        <>
            <IconButton
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClickButton}
            >
                {open ? <ClearIcon/> : <MenuIcon/>}
            </IconButton>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClickItem}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                {keys.map((to: Route) => <MenuItem onClick={() => handleClickItem(to.toString())} key={to}>
                    {to}
                </MenuItem>)}
            </Menu>
        </>
    );
};

export default MobileNavigation;