import React from 'react';
import { Grid, Stack } from "@mui/material";


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
            <Stack sx={{width: "100%"}} spacing={6}>
                {children}
            </Stack>
        </Grid>
    );
};

export default AppContent;