import React from 'react';
import { Paper } from "@mui/material";
import { Element } from "react-scroll";

import { routes } from "../consts/route";


const Faq = () => {
    return (
        <Element style={{width: "100%"}} name={routes.faq}>
            <Paper sx={{height: 500, width: "100%"}}>
                faq
            </Paper>
        </Element>
    );
};

export default Faq;