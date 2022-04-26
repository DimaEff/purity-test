import React, { useContext } from 'react';
import { useSwiper } from "swiper/react";
import { Button, colors, SxProps, Theme, Typography, useTheme } from "@mui/material";
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded';
import { useTranslation } from "react-i18next";

import { TestContext } from "./testQuestions";
import ButtonStack from "../../common/ButtonStack";
import { Localizations } from "../localizations";


const CarouselNavigation = () => {
    const { t } = useTranslation();

    const swiper = useSwiper();
    const theme = useTheme();
    const {isEnd, setIsEnd} = useContext(TestContext);

    const sxIcon: SxProps<Theme> = (theme: Theme) => ({
        color: theme.palette.mode === "light" ? colors.blue[400] : colors.grey[400],
        fontSize: 40,
    });

    const handleSuccess = () => {
        swiper.slideNext();
        setIsEnd(true);
    }

    return (
        <ButtonStack
            sx={{
                width: "100%",
                display: "flex",
                justifyContent: "flex-end",
            }}
        >
            {
                isEnd ? null : <>
                    {(swiper.activeIndex !== 0) && <Button variant={"text"} onClick={() => swiper.slidePrev()}>
                        <ArrowBackIosRoundedIcon sx={sxIcon}/>
                    </Button>}
                    {/* -2 because last slide is result*/}
                    {(swiper.activeIndex !== swiper.slides.length - 2) ?
                        <Button variant={"text"} onClick={() => swiper.slideNext()}>
                            <ArrowForwardIosRoundedIcon sx={sxIcon}/>
                        </Button> :
                        <Button onClick={handleSuccess} color={"success"} variant={"contained"}>
                            <Typography
                                color={theme.palette.mode === "light" ? "#fff" : "#fff"}
                                variant={"h6"}
                                fontWeight={"bold"}
                            >
                                {t(Localizations.ResultNavigationButton)}
                            </Typography>
                        </Button>
                    }
                </>
            }
        </ButtonStack>
    );
};

export default CarouselNavigation;