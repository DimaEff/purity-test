import React, { useContext } from 'react';
import { Box, Button, Stack, Typography } from "@mui/material";
import { useSwiper } from "swiper/react";

import { TestContext } from "./testQuestions";
import ShareButtons from "./share/shareButtons";
import { orange } from "@mui/material/colors";


interface ResultProps {
}

const Result: React.FC<ResultProps> = () => {
    const swiper = useSwiper();
    const {selectedCheckboxes, resetCheckboxes, setIsEnd} = useContext(TestContext);

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
                    color: orange[800],
                }}
            >
                {selectedCheckboxes.length}
            </Typography>
            <Typography textAlign={"center"} fontWeight={"bold"}>
                Individuals that score 94 to 97 are probably very pure. However, they may have done a few innocent
                things like kissing or holding hands with other people that aren't family members.
            </Typography>
            <ShareButtons/>
            <Box>
                <Button variant={"contained"} onClick={handleTryAgain}>
                    Try again
                </Button>
            </Box>
        </Stack>
    );
};

export default Result;