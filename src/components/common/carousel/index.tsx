import React, { useMemo, useState } from 'react';
import { Box, SxProps } from "@mui/material";
import SwiperRef from "swiper";
import { Swiper, SwiperProps, SwiperSlide } from "swiper/react";
import 'swiper/css';
import CarouselNavigation from "../../purityTest/testQuestions/carouselNavigation";


export interface NavigationProps {
    swiper: SwiperRef;
}

interface CarouselNativeProps {
    width?: string | number;
    height?: string | number;
    sxWrapper?: SxProps;
    sxSlide?: SxProps;
    NavigationComponentTop?: React.FC<NavigationProps>;
    NavigationComponentBottom?: React.FC<NavigationProps>;
    withNavigation?: boolean;
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
        withNavigation,
        ...props
    }
) => {
    const childrenArray = React.Children.toArray(children);
    const [swiper, setSwiper] = useState<SwiperRef | null>(null);

    const navigation = useMemo(() => (withNavigation && swiper) ?
        <CarouselNavigation swiper={swiper}/> : null, [swiper, withNavigation]);

    return (
        <Box
            sx={{
                display: "flex",
                flexFlow: "column",
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
                onInit={setSwiper}
            >
                {
                    childrenArray.map(((child, i) => <SwiperSlide key={i}>
                            <Box
                                sx={{
                                    display: "flex",
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
            </Swiper>
            {navigation}
        </Box>
    );
};

export default Carousel;