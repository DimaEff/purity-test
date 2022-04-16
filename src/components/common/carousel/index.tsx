import React, { useMemo, useRef, useState } from 'react';
import { Box, SxProps } from "@mui/material";
import Slider from "react-slick";

import NavigationCarousel from "./Navigation";


interface CarouselProps {
    width: string | number;
    height: string | number;
    sx?: SxProps;
    keys?: (string | number)[];
}

const Carousel: React.FC<CarouselProps> = (
    {
        children,
        width,
        height,
        sx,
        keys,
    }
) => {
    const childrenArray = React.Children.toArray(children);

    const slider = useRef<Slider>(null);
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
    const isPrev = useMemo(() => currentSlideIndex > 0, [currentSlideIndex]);
    const isNext = useMemo(() => currentSlideIndex < childrenArray.length - 1,
        [childrenArray.length, currentSlideIndex],
    );

    return (
        <Box
            sx={{
                position: "relative",
                width,
                height,

                ".slider-carousel": {
                    height: "calc(100% - 40px)",
                },

                ...sx
            }}
        >
            <Slider
                ref={slider}
                swipe
                arrows={false}
                beforeChange={(currentSlide, nextSlide) => setCurrentSlideIndex(nextSlide)}
                infinite={false}
                speed={300}
                className={"slider-carousel"}
            >
                {
                    childrenArray.map((child, i) => <Box
                        key={keys?.length ? keys[i] : i}
                        sx={{
                            position: "relative",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            width: "100%",
                            height: "100%",
                        }}
                    >
                        {child}
                    </Box>)
                }
                <Box
                    sx={{
                        zIndex: 50,
                        position: "absolute",
                        bottom: 0,
                        right: 0,
                        width: "100%",
                    }}
                >
                </Box>
            </Slider>
            <NavigationCarousel
                slider={slider}
                isNext={isNext}
                isPrev={isPrev}
                onSuccess={() => console.log("success")}
            />
        </Box>
    );
};

export default Carousel;