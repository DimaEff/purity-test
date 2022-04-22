import React, { useContext } from 'react';
import { Box, Button, IconButton, Stack, Typography } from "@mui/material";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import { useSwiper } from "swiper/react";

import { TestContext } from "./testQuestions";


interface ResultProps {
}

const Result: React.FC<ResultProps> = () => {
    const swiper = useSwiper();
    const { selectedCheckboxes, resetCheckboxes, setIsEnd } = useContext(TestContext);

    const handleTryAgain = () => {
        setIsEnd(false);
        resetCheckboxes();
        swiper.slideTo(0);
    }

    return (
        <Stack
            spacing={3}
            sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexFlow: "column",
                width: "100%",
                height: "100%",
            }}
        >
            <Typography textAlign={"center"} fontWeight={"bold"} variant={"h4"}>
                Your Purity Score is
            </Typography>
            <Typography
                fontWeight={"bold"}
                variant={"h2"}
                sx={{
                    backgroundImage: "linear-gradient(90deg, rgba(252,255,46,1) 2%, rgba(217,84,10,1) 40%)",
                    backgroundClip: "text",
                    textFillColor: "transparent",
                }}
            >
                {selectedCheckboxes.length}
            </Typography>
            <Typography textAlign={"center"} fontWeight={"bold"}>
                Individuals that score 94 to 97 are probably very pure. However, they may have done a few innocent things like kissing or holding hands with other people that aren't family members.
            </Typography>
            <Stack direction={"row"} spacing={2}>
                <IconButton>
                    <FacebookIcon fontSize={"large"} sx={{color: "#4867AA"}}/>
                </IconButton>
                <IconButton>
                    <TwitterIcon fontSize={"large"} sx={{color: "#1DA1F2"}}/>
                </IconButton>
                <IconButton>
                    <PinterestIcon fontSize={"large"} sx={{color: "#DF0021"}}/>
                </IconButton>
            </Stack>
            <Box>
                <Button variant={"contained"} onClick={handleTryAgain}>
                    <Typography>
                        Try again
                    </Typography>
                </Button>
            </Box>
        </Stack>
    );
};

export default Result;