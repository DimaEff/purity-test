import React from 'react';
import { Grid } from "@mui/material";


const AppContent: React.FC = ({children}) => {
    return (
        <Grid
            sx={theme => ({
                width: "100%",
                maxWidth: "100%",
                padding: theme.spacing(2, 1),
            })}
            direction={"column"}
            container
        >
            {children}
        </Grid>
    );
};

export default AppContent;