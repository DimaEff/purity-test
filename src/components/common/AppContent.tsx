import React from 'react';
import { Stack } from "@mui/material";

import { useBreakpoints } from "../../hooks";
import { MAX_CONTENT_WIDTH } from "../../consts/theme";


const AppContent: React.FC = ({children}) => {
    const { isMobile } = useBreakpoints();

    return (
        <Stack
            spacing={2}
            sx={theme => ({
                display: "flex",
                flexFlow: "column",
                alignItems: "center",
                margin: isMobile ? theme.spacing(0, 0, 14, 0) : theme.spacing(14, 0, 0, 0),
                maxWidth: MAX_CONTENT_WIDTH,
                width: "100%",

                "& > *": {
                    width: "100%",
                    maxWidth: MAX_CONTENT_WIDTH,
                },
            })}
        >
            {children}
        </Stack>
    );
};

export default AppContent;