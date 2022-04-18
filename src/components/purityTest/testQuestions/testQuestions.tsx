import React from 'react';
import { Paper, Typography } from "@mui/material";


const TestQuestions = () => {
    return (
        <Paper sx={theme => ({width: "100%", height: "60%", margin: theme.spacing(1)})}>
            <Typography>
                questions
            </Typography>
        </Paper>
    );
};

export default TestQuestions;