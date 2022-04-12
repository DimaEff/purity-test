import React from 'react';
import { Box } from "@mui/material";

import { BACKGROUND_COLOR_DARK, BACKGROUND_COLOR_LIGHT } from "../../consts/theme";
import { APP_SCROLLER_WRAPPER_ID } from "../../consts/routes";


const AppWrapper: React.FC = ({children}) => {
    return (
        <Box
            id={APP_SCROLLER_WRAPPER_ID}
            sx={theme => ({
                position: "relative",
                display: "flex",
                justifyContent: "center",
                padding: theme.spacing(0, 2, 0, 2),
                height: "100%",
                minHeight: "100vh",
                backgroundColor: theme.palette.mode === "light" ? BACKGROUND_COLOR_LIGHT : BACKGROUND_COLOR_DARK,
            })}
        >
            {children}
        </Box>
    );
};

export default AppWrapper;