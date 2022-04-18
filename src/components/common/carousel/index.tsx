import React from 'react';
import { Box, SxProps } from "@mui/material";
import { Swiper, SwiperProps, SwiperSlide } from "swiper/react";
import 'swiper/css';

import Navigation from "./Navigation";


interface CarouselProps {
    width?: string | number;
    height?: string | number;
    sxWrapper?: SxProps;
    sxSlide?: SxProps;
    NavigationComponent?: React.Component | boolean;
}

const Carousel: React.FC<CarouselProps & Omit<SwiperProps, "height">> = (
    {
        children,
        width,
        height,
        sxWrapper,
        sxSlide,
        NavigationComponent,
        ...props
    }
) => {
    const childrenArray = React.Children.toArray(children);

    return (
        <Box
            sx={{
                display: "flex",
                width: width || "100%",
                height: height || "100%",
                ...sxWrapper
            }}
        >
            <Swiper
                style={{
                    width: "100%",
                    height: "100%",
                }}
                {...props}
            >
                {
                    childrenArray.map(((child, i) => <SwiperSlide key={i}>
                            <Box
                                sx={{
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    width: "100%",
                                    height: "100%",
                                    ...sxSlide,
                                }}
                            >
                                {child}
                            </Box>
                        </SwiperSlide>
                    ))
                }
                {NavigationComponent || <Navigation />}
            </Swiper>
        </Box>
    );
};

export default Carousel;