import React from 'react';
import { Box } from "@mui/material";

import { StartTest, TestQuestions } from "../components/purityTest";
import Carousel from "../components/common/carousel";


const PurityTest = () => {
    return (
        <Box>
            <Carousel width={"100%"} height={"90vh"} CustomNavigation={() => <></>}>
                <Box sx={{height: "90vh", paddingBottom: 200}}>
                    <StartTest/>
                </Box>
                <TestQuestions/>
            </Carousel>
        </Box>
    );
};

export default PurityTest;