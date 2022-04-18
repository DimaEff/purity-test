import React from 'react';
import { Box, Container } from "@mui/material";

import { BACKGROUND_COLOR_DARK, BACKGROUND_COLOR_LIGHT } from "../../consts/theme";


const AppWrapper: React.FC = ({children}) => {
    return (
        <>
            <Box
                sx={theme => ({
                    zIndex: -50,
                    position: "fixed",
                    top: 0,
                    left: 0,
                    height: "100vh",
                    width: "100vw",
                    backgroundColor: theme.palette.mode === "light" ? BACKGROUND_COLOR_LIGHT : BACKGROUND_COLOR_DARK,
                })}
            />
            <Container
                sx={{position: "relative"}}
                maxWidth={"md"}
            >
                {children}
            </Container>
        </>
    );
};

export default AppWrapper;