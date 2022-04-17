import React from 'react';
import { Box, Container, Paper, Stack } from "@mui/material";

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
                maxWidth: "100%",
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
    const {isMobile} = useBreakpoints();

    return (
        <Container
            maxWidth={"md"}
            sx={theme => ({
                zIndex: theme.zIndex.modal,
                position: "fixed",
                [isMobile ? "bottom" : "top"]: 0,
                display: "flex",
                justifyContent: "center",
                width: "100%",
                padding: 2,
            })}
        >
            <HeaderComponent/>
        </Container>
    )
}

export default Header;