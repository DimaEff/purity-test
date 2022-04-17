import React from 'react';
import { Grid } from "@mui/material";

import { useBreakpoints } from "../../hooks";


const AppContent: React.FC = ({children}) => {
    const {isMobile} = useBreakpoints();

    return (
        <Grid
            sx={theme => ({
                margin: isMobile ? theme.spacing(0, 0, 14, 0) : theme.spacing(14, 0, 0, 0),
            })}
            direction={"column"}
            spacing={2}
            zeroMinWidth
            container
        >
            {children}
        </Grid>
    );
};

export default AppContent;