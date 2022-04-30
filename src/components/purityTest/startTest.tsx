import React from 'react';
import { Box, Button, Typography } from "@mui/material";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import { useSwiper } from "swiper/react";
import { useTranslation } from "react-i18next";

import { Localizations } from "./localizations";
import SeeMore from "./seeMore";
import { useBreakpoints } from "../../hooks";


const StartTest = () => {
    const {t} = useTranslation();
    const swiper = useSwiper();
    const { isMobile } =useBreakpoints();

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
                    position: "relative",
                    bottom: isMobile ? "-7vh" : "-15vh",
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                }}
            >
                <SeeMore/>
            </Box>
        </Box>
    );
};

export default StartTest;