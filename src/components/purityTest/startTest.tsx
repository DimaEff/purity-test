import React from 'react';
import { Box, Button, Typography } from "@mui/material";
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';

import SectionWrapper from "../common/SectionWrapper";


const StartTest = () => {

    return (
        <SectionWrapper
            title={"Rice Purity Test"}
            wrapperSx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "100%"
                // height: isMobile ? "90vh" : "auto",
            }}
        >
            <Typography
                sx={{
                    textAlign: "center",
                    width: "100%",
                }}
                variant={"body1"}
            >
                This rice purity test will let you know how pure you are. The test consists of 100 questions and the
                more your positive answers, the lower your purity score. Take the test now to find out your score!
            </Typography>
            <Box textAlign={"center"}>
                <Button variant={"text"}>
                    <Typography display={"flex"} alignItems={"center"} fontWeight={700} variant={"h6"}>
                        Start test <ArrowForwardRoundedIcon
                        sx={theme => ({marginLeft: theme.spacing(1), fontSize: 30})}/>
                    </Typography>
                </Button>
            </Box>
        </SectionWrapper>
    );
};

export default StartTest;