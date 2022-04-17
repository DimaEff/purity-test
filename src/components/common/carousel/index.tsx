import React from 'react';
import { Box, SxProps } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';

import Navigation from "./Navigation";


interface CarouselProps {
    width: string | number;
    height: string | number;
    sx?: SxProps;
}

const Carousel: React.FC<CarouselProps> = ({width, height, sx}) => {
    return (
        <Box
            sx={{
                display: "flex",
                width,
                height,
                ...sx
            }}
        >
            <Swiper
                style={{
                    width: "100%",
                }}
            >
                <SwiperSlide>Slide 1</SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
                <Navigation />
            </Swiper>
        </Box>
    );
};

export default Carousel;