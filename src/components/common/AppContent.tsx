import React from 'react';
import { Stack } from "@mui/material";

import { useBreakpoints } from "../../hooks";

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
            })}
        >
            {children}
        </Stack>
    );
};

export default AppContent;