import React from 'react';
import { useSwiper } from "swiper/react";
import { Button, colors, SxProps, Theme, Typography, useTheme } from "@mui/material";
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded';

import ButtonStack from "../../common/ButtonStack";


const CarouselNavigation = () => {
    const swiper = useSwiper();
    const theme = useTheme();

    const sxIcon: SxProps<Theme> = (theme: Theme) => ({
        color: theme.palette.mode === "light" ? colors.blue[400] : colors.grey[400],
        fontSize: 40,
    });

    return (
        <ButtonStack sx={{width: "100%", display: "flex", justifyContent: "flex-end"}}>
            {swiper.activeIndex !== 0 && <Button variant={"text"} onClick={() => swiper.slidePrev()}>
                <ArrowBackIosRoundedIcon sx={sxIcon}/>
            </Button>}
            {(swiper.activeIndex !== swiper.slides.length - 1) ?
                <Button variant={"text"} onClick={() => swiper.slideNext()}>
                    <ArrowForwardIosRoundedIcon sx={sxIcon}/>
                </Button> :
                <Button color={"success"} variant={"contained"}>
                    <Typography
                        color={theme.palette.mode === "light" ? "#fff" : "#fff"}
                        variant={"h6"}
                        fontWeight={"bold"}
                    >
                        Result
                    </Typography>
                </Button>
            }
        </ButtonStack>
    );
};

export default CarouselNavigation;