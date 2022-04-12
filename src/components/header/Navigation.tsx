import React, { useState } from 'react';
import { IconButton, Menu, MenuItem, Stack } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';

import { Routes, routes } from "../../consts/routes";
import HashLink from "./HashLink";
import { useBreakpoints } from "../../hooks";


const Navigation = () => {
    const { isMobile } = useBreakpoints();

    const [open, setOpen] = useState(false);
    const keys = Object.keys(routes);

    return (
        <>
            {
                isMobile ?
                    <>
                        <IconButton onClick={() => setOpen(o => !o)}>
                            <MenuIcon />
                        </IconButton>
                        <Menu open={open}>
                            {keys.map((to: Routes) => <MenuItem onClick={() => setOpen(false)} key={to.toString()}>
                                <HashLink to={to}/>
                            </MenuItem>)}
                        </Menu>
                    </> :
                    <Stack spacing={1} direction={"row"}>
                        {keys.map((to: Routes) => <HashLink key={to.toString()} to={to}/>)}
                    </Stack>
            }
        </>
    );
};

export default Navigation;