import React from 'react';
import { Paper } from "@mui/material";

import PurityTestPart from "../components/purityTest";


const PurityTest = () => {
    return (
        <Paper sx={{height: 1200}}>
            <PurityTestPart />
        </Paper>
    );
};

export default PurityTest;