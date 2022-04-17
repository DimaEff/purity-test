import React from 'react';
import { Box, Container } from "@mui/material";

import { BACKGROUND_COLOR_DARK, BACKGROUND_COLOR_LIGHT } from "../../consts/theme";
import { useBreakpoints } from "../../hooks";


const AppWrapper: React.FC = ({children}) => {
    const { isMobile } = useBreakpoints();

    return (
        <Box
            sx={theme => ({
                position: "relative",
                display: "flex",
                justifyContent: "center",
                minWidth: 0,
                height: "100%",
                minHeight: "100vh",
                backgroundColor: theme.palette.mode === "light" ? BACKGROUND_COLOR_LIGHT : BACKGROUND_COLOR_DARK,
                // padding: 2,
            })}
        >
            <Container
                sx={{
                    position: "relative",
                }}
                maxWidth={"md"}
            >
                {children}
            </Container>
        </Box>
    );
};

export default AppWrapper;