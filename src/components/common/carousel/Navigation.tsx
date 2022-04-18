import React from 'react';
import { useSwiper } from "swiper/react";
import { Box } from "@mui/material";


interface NavigationProps {
}

const Navigation: React.FC<NavigationProps> = () => {
    const swiper = useSwiper();

    return (
        <Box sx={{zIndex: 123123}}>
            <button onClick={() => swiper.slidePrev()}>{"<"}</button>
            <button onClick={() => swiper.slideNext()}>{">"}</button>
        </Box>
    );
};

export default Navigation;