import React from 'react';
import { Box, Button, Stack, Typography } from "@mui/material";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded';
import { useSwiper } from "swiper/react";
import { useTranslation } from "react-i18next";

import { scrollTo } from "../../utils";
import { Localizations } from "./localizations";


const StartTest = () => {
    const {t} = useTranslation();
    const swiper = useSwiper();

    return (
        <Box>
            <Typography variant={"h6"} fontWeight={"bold"} textAlign={"center"}>
                {t(Localizations.Description)}
            </Typography>
            <Box textAlign={"center"} marginTop={3}>
                <Button onClick={() => swiper.slideNext()} variant={"text"}>
                    <Typography fontWeight={"bold"} display={"flex"} alignItems={"center"} variant={"h4"}>
                        {t(Localizations.StartTestButton)}
                        <ArrowForwardRoundedIcon
                            sx={theme => ({
                                fontSize: theme.spacing(5),
                                marginLeft: theme.spacing(1),
                            })}
                        />
                    </Typography>
                </Button>
            </Box>
            <Box
                sx={{
                    position: "fixed",
                    left: 0,
                    bottom: 250,
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                }}
            >
                <Stack
                    spacing={1}
                    sx={{
                        textAlign: "center",
                        cursor: "pointer",
                    }}
                    onClick={() => scrollTo("scoreMeaning")}
                >
                    <Typography variant={"h6"} fontWeight={"bold"}>
                        See more
                    </Typography>
                    <Typography>
                        <ArrowBackIosRoundedIcon
                            sx={{
                                transform: "rotate(-90deg)",
                                fontSize: 32,
                            }}
                        />
                    </Typography>
                </Stack>
            </Box>
        </Box>
    );
};

export default StartTest;