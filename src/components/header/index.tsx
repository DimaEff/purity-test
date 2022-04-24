import React from 'react';
import { Box, Container, Paper, Stack } from "@mui/material";

import desktopLogo from "../../assets/purity-logo.svg";
import { useBreakpoints } from "../../hooks";
// import LanguageSelect from "./LanguageSelect";
import ChangeMode from "./ChangeMode";
import MobileNavigation from "./navigation/MobileNavigation";
import DesktopNavigation from "./navigation/DesktopNavigation";
import Logo from "./Logo";


export const HeaderComponent = () => {
    const {isMobile} = useBreakpoints();

    return (
        <Paper
            elevation={2}
            sx={(theme) => ({
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                height: theme.spacing(5),
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
    return (
        <Box
            sx={theme =>( {
                zIndex: theme.zIndex.modal,
                position: "fixed",
                width: "100%",
                padding: theme.spacing(2, 0),
            })}
        >
            <Container maxWidth={"md"}>
                <HeaderComponent/>
            </Container>
        </Box>
    )
}

export default Header;