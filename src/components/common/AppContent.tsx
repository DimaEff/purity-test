import React from 'react';
import { Grid } from "@mui/material";


const AppContent: React.FC = ({children}) => {
    return (
        <Grid
            sx={theme => ({
                width: "100%",
                maxWidth: "100%",
                margin: theme.spacing(2, 0),
            })}
            direction={"column"}
            container
        >
            {children}
        </Grid>
    );
};

export default AppContent;