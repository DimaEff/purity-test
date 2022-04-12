import React from 'react';
import { Paper } from "@mui/material";
import { Element } from "react-scroll";

import { routes } from "../consts/routes";


const ScoreMeaning = () => {
    return (
        <Paper sx={{height: 1200}}>
            <Element name={routes.scoreMeaning}/>
            score
        </Paper>
    );
};

export default ScoreMeaning;