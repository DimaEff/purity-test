import React from 'react';
import { Box, Stack } from "@mui/material";

import { BACKGROUND_COLOR_DARK, BACKGROUND_COLOR_LIGHT } from "../../consts/theme";


const AppWrapper: React.FC = ({children}) => {
    return (
        <Box
            sx={{
                position: "relative",
                display: "flex",
                justifyContent: "center",
            }}
        >
            <Box
                sx={theme => ({
                    zIndex: -50,
                    position: "fixed",
                    top: 0,
                    left: 0,
                    height: "150vh",
                    width: "100vw",
                    backgroundColor: theme.palette.mode === "light" ? BACKGROUND_COLOR_LIGHT : BACKGROUND_COLOR_DARK,
                })}
            />
            <Stack
                spacing={3}
                sx={{
                    width: "100%",
                    maxWidth: 868,
                }}
            >
                {children}
            </Stack>
        </Box>
    );
};

export default AppWrapper;