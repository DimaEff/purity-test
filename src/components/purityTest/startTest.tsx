import React from 'react';
import { Box, Button, Typography } from "@mui/material";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import { useSwiper } from "swiper/react";


const StartTest = () => {
    const swiper = useSwiper();

    return (
        <Box>
            <Typography variant={"h6"} fontWeight={"bold"} textAlign={"center"}>
                This rice purity test will let you know how pure you are. The test consists of 100 questions and the
                more your positive answers, the lower your purity score. Take the test now to find out your score!
            </Typography>
            <Box textAlign={"center"} marginTop={3}>
                <Button onClick={() => swiper.slideNext()} variant={"text"}>
                    <Typography fontWeight={"bold"} display={"flex"} alignItems={"center"} variant={"h4"}>
                        Start test
                        <ArrowForwardRoundedIcon
                            sx={theme => ({
                                fontSize: theme.spacing(5),
                                marginLeft: theme.spacing(1),
                            })}
                        />
                    </Typography>
                </Button>
            </Box>
        </Box>
    );
};

export default StartTest;