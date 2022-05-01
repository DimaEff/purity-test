import React, { useContext, useMemo } from 'react';
import { Box, Button, Stack, Typography } from "@mui/material";
import { useSwiper } from "swiper/react";
import { useTranslation } from "react-i18next";

import { QUESTIONS_COUNT } from "../../../consts/app";
import { TestContext } from "./testQuestions";
import ShareButtons from "./shareButtons";
import { getNeededScoreResult } from "../../scoreMeaning/utils";
import { Localizations } from "../localizations";


const Result = () => {
    const { t } = useTranslation();
    const swiper = useSwiper();
    const {selectedCheckboxes, resetCheckboxes, setIsEnd} = useContext(TestContext);

    const handleTryAgain = () => {
        setIsEnd(false);
        resetCheckboxes();
        swiper.slideTo(0);
    }

    const score = useMemo(() => QUESTIONS_COUNT - selectedCheckboxes.length, [selectedCheckboxes.length]);
    const { color, textId } = useMemo(() => getNeededScoreResult(score), [score]);

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
                // overflowY: "auto",
            }}
        >
            {/*<Typography textAlign={"center"} fontWeight={"bold"} variant={"h4"}>*/}
            {/*    Your Purity Score is*/}
            {/*</Typography>*/}
            <Typography
                fontWeight={"bold"}
                variant={"h2"}
                sx={{color}}
            >
                {QUESTIONS_COUNT - selectedCheckboxes.length}
            </Typography>
            <Typography textAlign={"center"} fontWeight={"bold"}>
                {t(textId)}
            </Typography>
            <ShareButtons score={score}/>
            <Box>
                <Button variant={"contained"} onClick={handleTryAgain}>
                    {t(Localizations.TryAgain)}
                </Button>
            </Box>
        </Stack>
    );
};

export default Result;