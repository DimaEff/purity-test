import React from 'react';
import { Box, SxProps } from "@mui/material";
import { Swiper, SwiperProps, SwiperSlide } from "swiper/react";
import 'swiper/css';


interface CarouselNativeProps {
    width?: string | number;
    height?: string | number;
    sxWrapper?: SxProps;
    sxSlide?: SxProps;
    NavigationComponentTop?: React.FC;
    NavigationComponentBottom?: React.FC;
}

export type CarouselProps = CarouselNativeProps & Omit<SwiperProps, "height">;

const Carousel: React.FC<CarouselProps> = (
    {
        children,
        width,
        height,
        sxWrapper,
        sxSlide,
        NavigationComponentTop,
        NavigationComponentBottom,
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
                <Box>
                    {NavigationComponentTop && <NavigationComponentTop />}
                </Box>
                {
                    childrenArray.map(((child, i) => <SwiperSlide key={i}>
                            <Box
                                sx={{
                                    display: "flex",
                                    // justifyContent: "center",
                                    // alignItems: "center",
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
                <Box sx={{zIndex: 100, position: "absolute", bottom: 0, width: "100%"}}>
                    {NavigationComponentBottom && <NavigationComponentBottom />}
                </Box>
            </Swiper>
        </Box>
    );
};

export default Carousel;