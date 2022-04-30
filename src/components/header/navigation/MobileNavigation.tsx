import React from 'react';
import { IconButton, Menu, MenuItem } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ClearIcon from '@mui/icons-material/Clear';
import { useTranslation } from "react-i18next";

import { scrollTo } from "../../../utils";
import { routes } from "../../../consts/route";


const MobileNavigation = () => {
    const {t} = useTranslation();
    const keys = Object.keys(routes);

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const handleClickButton = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClickItem = (to: string) => {
        scrollTo(to);
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
                {keys.map((to) => <MenuItem key={to.toString()} onClick={() => handleClickItem(to)}>
                    {t(routes[to])}
                </MenuItem>)}
            </Menu>
        </>
    );
};

export default MobileNavigation;