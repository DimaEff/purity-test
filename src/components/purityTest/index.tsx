import React from 'react';
import Carousel from "../common/carousel";
import { Paper, Typography } from "@mui/material";


const PurityTest = () => {
    const test = [1, 2, 4, 5, 6, 7];

    return (
        <Paper>
            <Carousel width={300} height={150}>
                {test.map(te => <Typography key={te}>{te}</Typography>)}
            </Carousel>
        </Paper>
    );
};

export default PurityTest;