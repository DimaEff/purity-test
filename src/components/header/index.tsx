import React from 'react';
import { Box, Paper, Stack } from "@mui/material";

import desktopLogo from "../../assets/purity-logo.svg";
import { useBreakpoints } from "../../hooks";
// import LanguageSelect from "./LanguageSelect";
import ChangeMode from "./ChangeMode";
import MobileNavigation from "./navigation/MobileNavigation";
import DesktopNavigation from "./navigation/DesktopNavigation";
import Logo from "./Logo";


const HeaderComponent = () => {
    const {isMobile} = useBreakpoints();

    return (
        <Paper
            elevation={2}
            sx={(theme) => ({
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "100%",
                maxWidth: theme.spacing(90),
                height: theme.spacing(5),
                margin: theme.spacing(2, 1),
            })}
        >
            <Box>
                <Logo src={desktopLogo}/>
            </Box>
            <Stack direction={"row"} spacing={1}>
                {isMobile || <DesktopNavigation/>}
                {/*<LanguageSelect/>*/}
                <ChangeMode/>
                {isMobile && <MobileNavigation/>}
            </Stack>
        </Paper>
    );
};

const Header = () => {
    const {isMobile} = useBreakpoints();

    return (
        <Box
            sx={(theme) => ({
                zIndex: theme.zIndex.modal,
                position: "fixed",
                [isMobile ? "bottom" : "top"]: 0,
                display: "flex",
                justifyContent: "center",
                width: "100%",
                maxWidth: 800,
            })}
        >
            <HeaderComponent/>
        </Box>
    )
}

export default Header;